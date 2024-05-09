import ApiConfigModel from "./models/ApiConfigModel";
import EndpointConfigModel from "./models/EndpointConfigModel";
import GenModel from "./models/GenModel";
import MongoConfigModel from "./models/MongoConfigModel";
import RedisConfigModel from "./models/RedisConfigModel";

export default class ConfigGen
{
    static config(endpoint:EndpointConfigModel,mongo:MongoConfigModel,redis:RedisConfigModel,api:ApiConfigModel):string
    {
        let str=`
export default new ConfigModel({
    packageConfig:[`;
        let imports=`import {ConfigModel} from "@origamicore/core";  \n `
        if(mongo.valid)
        {
            let epConfig=mongo.getConfig();
            imports+=epConfig.imports+'\n';
            str+=epConfig.config;

        }
        if(api.valid)
        {
            let epConfig=api.getConfig();
            imports+=epConfig.imports+'\n';
            str+=epConfig.config;
        }
        if(redis.valid)
        {
            let epConfig=redis.getConfig();
            imports+=epConfig.imports+'\n';
            str+=epConfig.config;
        }
        if(endpoint.valid)
        {
            let epConfig=endpoint.getConfig();
            imports+=epConfig.imports+'\n';
            str+=epConfig.config;
        }
        str+=`
    ]
});
        `
        return imports+ str;
    }
}