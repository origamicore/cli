import OrigamiCore, { ConfigModel } from '@origamicore/core' 
import { EndpointConfig } from '@origamicore/endpoint';
import LocalService, { ApiConfig } from './LocalService';

const { platform } = require('os');
const { exec } = require('child_process');
const WINDOWS_PLATFORM = 'win32';
const MAC_PLATFORM = 'darwin';
const osPlatform = platform();
export default class LocalServer
{
    constructor(port:number)
    {   
        this.init(port);
    }
    async openUrl(url:string)
    {
        let command;
        
        if (osPlatform === WINDOWS_PLATFORM) {
          command = `start chrome "${url}"`;
        //   command = `start microsoft-edge:${url}`;
        } else if (osPlatform === MAC_PLATFORM) {
          command = `open -a "Google Chrome" ${url}`;
        } else {
          command = `google-chrome --no-sandbox ${url}`;
        }
         
        
        exec(command);

    }
    async init(port:number)
    { 
        let config=new ConfigModel({
            packageConfig:[
                EndpointConfig.create({port,publicFolder:[__dirname.replace('\\dist','')+ '\\public\\'],cors:['*']}),
                new ApiConfig({})
            ]
        })
        var origamicore = new OrigamiCore(config);
        await origamicore.start()   
        console.log('>>start');
         
        this.openUrl( 'http://localhost:'+port ); 
    }
} 