import Prompts from "../Prompts";
import GenModel from "./GenModel";

export default class MongoConfigModel
{ 
    valid:boolean=false; 
    dbName:string='db-name'
    constructor(config:string[],npm:string[])
    {
        this.valid= config.indexOf('MongoDB')>-1  ; 
        if(this.valid)
        {
            npm.push('npm i @origamicore/mongo@latest')
        }
    }
    async runCustom()
    { 
        if(!this.valid)return; 
        this.dbName = await Prompts.getString(`Enter database name (def=>${this.dbName}) :`,this.dbName) ;
    }
    getConfig()
    { 
        let str=`
        new MongoConfig({
            connections:[
                new DatabaseConnection({
                    name:'default',
                    database:'${this.dbName}'
                }), 
            ]
         }),`; 
        let imports='import { DatabaseConnection, MongoConfig } from "@origamicore/mongo"'
        return new GenModel({
            config:str,
            imports 
        })
    }
}