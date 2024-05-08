import Prompts from "../Prompts";
import GenModel from "./GenModel";

export default class RedisConfigModel
{ 
    valid:boolean=false; 
    dbName:number=0;
    constructor(config:string[],npm:string[])
    {
        this.valid= config.indexOf('Redis')>-1  ; 
        if(this.valid)
        {
            npm.push('npm i @origamicore/redis@latest')
        }
    }
    async runCustom()
    { 
        if(!this.valid)return;
        this.dbName = await Prompts.getNumber(`Enter databse name (def=>${this.dbName}) :`,this.dbName) ;
    }
    getConfig()
    { 
        let str=`
        new RedisConfig({
           connections:new Map<string, RedisConnection>([
               ['default',new RedisConnection({
                   db:${this.dbName}
               }),] 
           ])
        }), `; 
        let imports='import { RedisConfig, RedisConnection } from "@origamicore/redis";'
        return new GenModel({
            config:str,
            imports 
        })
    }
}