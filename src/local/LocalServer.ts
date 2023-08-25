import OrigamiCore, { ConfigModel } from '@origamicore/core' 
import { EndpointConfig } from '@origamicore/endpoint';
import LocalService, { ApiConfig } from './LocalService';
export default class LocalServer
{
    constructor(port:number)
    {   
        this.init(port);
    }
    async init(port:number)
    {
        let config=new ConfigModel({
            packageConfig:[
                EndpointConfig.create({port,publicFolder:['public'],cors:['*']}),
                new ApiConfig({})
            ]
        })
        var origamicore = new OrigamiCore(config);
        await origamicore.start()   
    }
} 