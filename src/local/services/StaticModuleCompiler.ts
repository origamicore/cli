import ProjectModel, { EndpointConfig, MongoConfig, RedisConfig, StaticModule } from "@origamicore/projectmodels";

export default class StaticModuleCompiler
{
    
    static  getModules(modules:StaticModule[]):string[]
    {
        let str:string[]=[]
        for(let module of modules)
        {
            if(module.name=='redis')
            {
                str.push('@origamicore/redis')
            }
            if(module.name=='mongo')
            {
                str.push('@origamicore/mongo')
            }
            if(module.name=='endpoint')
            {
                str.push('@origamicore/endpoint')
            }

        } 
        return str;
    }
    static  getImports(modules:StaticModule[]):string
    {
        let str ='';
        for(let module of modules)
        {
            
            if(module.name=='redis')
            {
                str+='import { RedisConfig, RedisConnection } from "@origamicore/redis"\n'
            }
            if(module.name=='mongo')
            {
                str+='import { DatabaseConnection, MongoConfig } from "@origamicore/mongo";\n'
            }
            if(module.name=='endpoint')
            {
                str+='import {'
                if(module.name=='endpoint')
                {
                    str+=' EndpointConfig, ConnectionProtocol, EndpointConnectionType, EndpointConnection'
                }
                str+=' } from "@origamicore/endpoint";\n'
            }
        }
        return str;
    }
    static  Compile(modules:StaticModule[]):string
    { 
        let str='';
        for(let module of modules)
        {
            if(module.name=='redis')
            {
                let config= new RedisConfig(module.config) ;
                str+='        new RedisConfig({\n'
                str+='           connections:new Map<string, RedisConnection>([\n'
                for(let con of config.connections)
                {
                    str+='                ['+con.context+',new RedisConnection({\n'
                    str+='                    db:'+con.db+',\n' 
                    if(con.host)str+='                    host:'+con.host+',\n'
                    if(con.port)str+='                    port:'+con.port+',\n'
                    str+='                }),], \n'
                    
                }
                str+='            ])\n'
                str+='         }),\n'
                
            }
            if(module.name=='mongo')
            {
                let config= new MongoConfig(module.config) ;
                str+='         new MongoConfig({\n'
                str+='            connections:[\n'
                for(let con of config.connections)
                {
                    str+='                new DatabaseConnection({\n'
                    str+='                    name:"'+con.name+'",\n'
                    str+='                    database:"'+con.database+'",\n'
                    if(con.host)str+='                    host:"'+con.host+'",\n'
                    if(con.password)str+='                    password:"'+con.password+'",\n'
                    if(con.port)str+='                    port:'+con.port+',\n'
                    if(con.username)str+='                    username:"'+con.username+'",\n' 
                    str+='                }),\n'

                }
                str+='            ]\n'
                str+='         }),\n'
                
            }
            if(module.name=='endpoint')
            {
                let config= new EndpointConfig(module.config) ;
                str+='        new EndpointConfig({\n'
                str+='            connections:[\n'
                for(let con of config.connections)
                {
                    if(con.port)
                    {
                        str+='                new EndpointConnection({\n'
                        str+='                    protocol:new ConnectionProtocol({\n'
                        str+='                        port:'+con.port+',\n'
                        str+='                        type:\''+(con.protocolType??'http')+'\',\n'
                        if(con.socketProtocol)
                        {
                            str+='                        socketProtocol:"'+con.socketProtocol+'",\n'

                        }
                        if(con.key)
                        {
                            str+='                        key:"'+con.key+'",\n'
                            str+='                        crt:"'+con.crt+'",\n'

                        }
                        str+='                    }),\n'

                        str+='                    type:EndpointConnectionType.'+(con.type??'Express')+'\n'
                        str+='                }),\n'


                    }
                }
                str+='            ]\n'
                str+='        }),\n'
            }
        }
        return str;
    }
}