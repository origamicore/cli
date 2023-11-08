import { DbConnection } from "@origamicore/projectmodels";
import { CollectionInfo, MinKey, MongoClient } from "mongodb";
import { BSON, EJSON, ObjectId,Timestamp } from 'bson';
import Checker from "./documentChecker/checker";
export default class DbService
{
    static connections:Map<string,MongoClient>=new Map<string,MongoClient>();

    static async deleteCollection(connection:DbConnection,dbname:string,collection:string)
    { 
        let con= await this.connect(connection);
        const db = con.db(dbname);
        return db.dropCollection(collection)
    }
    static async deleteDatabase(connection:DbConnection,dbname:string)
    {
        let con= await this.connect(connection);
        const db = con.db(dbname);
        return db.dropDatabase()
    }
    static async createCollection(connection:DbConnection,dbname:string,collection:string)
    {
        let con= await this.connect(connection);
        const db = con.db(dbname);
        return db.createCollection(collection)
    }
    static async saveData(connection:DbConnection,dbname:string,collection:string,document:string)
    {
        let con= await this.connect(connection);
        const db = con.db(dbname); 
        let doc=Checker.getValue(document)
        return await db.collection(collection).replaceOne({_id:doc._id},doc)
    }
    static async newData(connection:DbConnection,dbname:string,collection:string,document:any)
    {
        let con= await this.connect(connection);
        const db = con.db(dbname);
        let doc=Checker.getValue(document)
        return await db.collection(collection).insertOne(doc)
    }
    static loadType(data:any)
    {
        
        if(Array.isArray(data))
        {
            let arr:any[]=[];
            for(let i of data)
            {
                arr.push(this.loadType(i))
            }
            return arr
        }
        else
        {
            let obj={}
            for(let prop in data)
            {
                obj[prop]=data[prop].constructor.name
            }
            return obj
        }
        
    }
    static stringify(data:any,dep:number=0)
    {
        let str='';
        let tabs=''
        for(let i=0;i<dep;i++) tabs+='    ';
        if(typeof(data)=='bigint'||typeof(data)=='boolean'||typeof(data)=='number') 
        {
            return data.toString()
        }
        if(typeof(data)=='undefined')
        {
            return 'undefined'
        }
        if(typeof(data)=='string')
        {
            return JSON.stringify(data)
        }
        if(typeof(data)=='object')
        { 
            if(data.constructor.name=='Timestamp')
            {   
                return 'Timestamp(ISODate('+JSON.stringify(new Date(data.low*1000))+'),ISODate('+JSON.stringify(new Date(data.high*1000))+'))'    
            }
            if(data.constructor.name=='DBRef')
            {
                let json=JSON.parse(JSON.stringify(data)) 
                return 'DBRef(\''+json.$ref+'\',\''+json.$id+'\')'                 
            }
            if(data.constructor.name=='ObjectId')
            {
                return 'ObjectId('+JSON.stringify(data)+')'
            }
            else if(data.constructor.name=='Date')
            {
                return 'ISODate('+JSON.stringify(data)+')'
            }
            else if(data.constructor.name=='MinKey')
            {
                new MinKey()
                return 'MinKey()'
            }
            else if(data.constructor.name=='MaxKey')
            {
                return 'MaxKey()'
            } 

        }
        if(Array.isArray(data))
        {
            str+='[\n'
            for(let itm of data)
            {
                str+= tabs+this.stringify(itm,dep+1)+',\n'
            }
            str+=tabs+']'
        }
        else
        {
            str+='{\n'
            for(let prop in data)
            {
                let val=data[prop]
                str+=tabs+'    "'+prop+'":' +this.stringify(val,dep+1)
                // if(typeof(val)=='string')str+= JSON.stringify(val)
                // else if(typeof(val)=='boolean' ||typeof(val)=='number' ||typeof(val)=='undefined'  )str+= val
                // else
                // {
                //     console.log('<<<<<<<<<<<<<',val.constructor.name);
                    
                //     if(val.constructor.name=='ObjectId')
                //     {
                //         str+= 'ObjectId('+JSON.stringify(val)+')'
                //     }
                //     else if(val.constructor.name=='Date')
                //     {
                //         str+= 'Date('+JSON.stringify(val)+')'
                //     }
                //     else if(val.constructor.name=='MinKey')
                //     {
                //         str+= 'MinKey('+JSON.stringify(val)+')'
                //     }
                //     else if(val.constructor.name=='MaxKey')
                //     {
                //         str+= 'MaxKey('+JSON.stringify(val)+')'
                //     }
                //     else
                //     {
                //         str+= this.stringify(val,dep+1)
                //     }
                // }
                str+=',\n'
            }
            str+=tabs+'}'            
        }
        return str;
    }
    static async getData(connection:DbConnection,dbname:string,collection:string,option:any,filter:any)
    {
        let con= await this.connect(connection);
        const db = con.db(dbname);
        let value=await db.collection(collection).find(filter,option ).toArray()
        console.log('>>>>>>');
        console.log(value[1]);
        console.log(JSON.stringify(value[1]) );


        let text:any[]=[]
        for(let row of value)
        {
            text.push(this.stringify(row))
        }
        let count=await db.collection(collection).countDocuments(filter)
        const bytes = BSON.serialize({value,count})
        const doc = BSON.deserialize(bytes);
        console.log(doc);
        console.log('---------------------------------');
        console.log(EJSON.stringify(doc) )

        return {count,value,text}


        // return  EJSON.stringify(doc) 
    }
    static async getCollections(connection:DbConnection,dbname:string)
    {
        let con= await this.connect(connection);
        const db = con.db(dbname);
        return await db.listCollections().toArray()
    }
    static async getDb(connection:DbConnection)
    { 
        
        let con= await this.connect(connection);
        const db = con.db('test');
        let admin =db.admin();
        let dbs=await admin.listDatabases() 
        return dbs.databases
        // for(let databse of  dbs.databases)
        // {
        //     (databse as CollectionInfo ) .
        // }
    }
    static async connect( connection:DbConnection):Promise<MongoClient>
    {
        if(this.connections.has(connection.name))return this.connections.get(connection.name)
        let url='mongodb://'
        if(connection.username)
        {
            url+=connection.username+':'+connection.password+'@'
        }
        url+=connection.host+':'+connection.port
        let client= new MongoClient(url)
        await client.connect()
        this.connections.set(connection.name,client)
        return client;
    }
}