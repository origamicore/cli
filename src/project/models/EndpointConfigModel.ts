import Prompts from "../Prompts";
import GenModel from "./GenModel";

export default class EndpointConfigModel
{
    haveExpress:boolean=false;
    haveSocket:boolean=false;
    valid:boolean=false;
    socketPort:number=5001;
    httpPort:number=5000;
    sessionManager:'JWT'|'Redis'|'Default'='JWT';
    constructor(config:string[],npm:string[])
    {
        this.valid= config.indexOf('Express')>-1 || config.indexOf('Socket')>-1 ;
        this.haveExpress=config.indexOf('Express')>-1;
        this.haveSocket=config.indexOf('Socket')>-1
        if(this.valid)
        {
            npm.push('npm i @origamicore/endpoint@latest')
        }
    }
    async runCustom()
    {
        if(!this.valid)return;
        this.sessionManager= await Prompts.sessionManager.run();
        if(this.haveExpress) 
            this.httpPort = await Prompts.getNumber(`Enter Express port number (def=>${this.httpPort}) :`,this.httpPort) ;
        
        if(this.haveSocket) 
            this.socketPort = await Prompts.getNumber(`Enter Socket port number (def=>${this.socketPort}) :`,this.socketPort) ;
    }
    getConfig()
    {
        let str='';
        str+=`
        new EndpointConfig({ 
            connections:[`;
        let session='';
        let fs='';
        let imports='EndpointConnectionType, ConnectionProtocol,EndpointConfig, EndpointConnection, '
        if(this.sessionManager=='Redis')
        {
            session+=`
                    redisConfig: new RedisSmConfig({
                        db:1
                    }),`
            imports +='RedisConfig as RedisSmConfig,'
        }
        if(this.sessionManager=='JWT')
        {
            session+=`
                    jwtConfig:new JwtConfig({
                        algorithm:'RS256',
                        secExpireTime:1000*60*60*24,
                        privateKey:fs.readFileSync('security/jwtRS256.key') + '',
                        publicKey:fs.readFileSync('security/jwtRS256.key.pub') + '',
                    }),`
            imports +='JwtConfig,'
            fs+="import fs from 'fs'; \n"
        }
        if(this.haveExpress)
        {
            str+=`
            new EndpointConnection({ 
                protocol:new ConnectionProtocol({
                    port:${this.httpPort},
                    type:'http',${session}
                }),
                cors:['*'],
                type:EndpointConnectionType.Express
            }),`
        }
        if(this.haveSocket)
        {
            str+=`
            new EndpointConnection({
                //debug:true,
                protocol:new ConnectionProtocol({
                    port:${this.socketPort},
                    type:'http',${session}
                }),
                cors:['*'],
                type:EndpointConnectionType.Socket,
                events:[
                    new ConnectionEvent({
                        domain:'api',
                        service:'openSession',
                        type:ConnectionEventType.Open
                    }),
                    new ConnectionEvent({
                        domain:'api',
                        service:'closeSession',
                        type:ConnectionEventType.Close
                    }),
                ]
            }),`
            imports+='ConnectionEvent, ConnectionEventType,'
        }
        str+=`
        ]
    })`
        return new GenModel({
            config:str,
            imports:'import { '+imports+'} from "@origamicore/endpoint";'+fs
        })
    }
}