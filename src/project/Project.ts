import Log, { Colors } from "../log";
import fs, { writeFileSync } from 'fs'
import Name from "../name";
import Files from "../files"; 
import Prompts from "./Prompts";
import EndpointConfigModel from "./models/EndpointConfigModel";
import ConfigGen from "./ConfigGen";
import MongoConfigModel from "./models/MongoConfigModel";
import RedisConfigModel from "./models/RedisConfigModel";
import ApiConfigModel from "./models/ApiConfigModel";
var crypto= require('crypto')
var Prompt = require('prompt-checkbox');
const { exec,spawn  } = require('child_process'); 
const fsx = require('fs-extra');
export default class Project
{
    static execute(command:string):Promise<void>
    {
        return new Promise((res,rej)=>{
            exec(command).on('exit',()=>{
                res();
            })
        })
    }
    static async createProjectInFolder(name:string,dir:string)
    {
        Log('Create '+name);
        await this.execute('git -C '+dir+' clone https://github.com/origamicore/seed.git')
        fs.rmSync(dir+'/seed/.git', { recursive: true, force: true })
        // fs.cpSync(dir+'/seed',dir)
        await fsx.copy(dir+'/seed', dir)
        fs.rmSync(dir+'/seed', { recursive: true, force: true })
        await this.execute('npm install --prefix  '+ dir+'/');
        let json=JSON.parse(fs.readFileSync(dir+'/package.json').toString());
        json.name=name;
        fs.writeFileSync(dir+'/package.json',JSON.stringify(json,null,4))
        Log('The '+name +' project was created successfully',Colors.Green); 
    }
    static async createProject(name:string,dir:string)
    {
        Log('Create '+name);
        let packages:string[] = await Prompts.packages.run() ;
        let config=''
        let npms:string[]=[]
        let api:ApiConfigModel=new ApiConfigModel(packages,npms)
        let endpoint:EndpointConfigModel=new EndpointConfigModel(packages,npms); 
        if(packages.length)
        {
            let manual:string=(await Prompts.Manual.run());
            let mongo:MongoConfigModel=new MongoConfigModel(packages,npms); 
            let redis:RedisConfigModel=new RedisConfigModel(packages,npms)
            if(manual=='Custom')
            {
                await endpoint.runCustom();
                await mongo.runCustom();
                await redis.runCustom(); 
                await api.runCustom(); 
            }  
            config=ConfigGen.config(endpoint,mongo,redis,api); 
        } 
        await this.execute('git -C '+dir+' clone https://github.com/origamicore/seed.git')
        fs.rmSync(dir+'/seed/.git', { recursive: true, force: true })
        fs.renameSync(dir+'/seed', dir+'/'+name);
        Log('Installing ');
        await this.execute('npm install --prefix  '+ dir+'/'+name+'/');
        if(npms.length)
            Log('Installing Modules');
        for(let npm of npms)
        {
            await this.execute(npm+' --prefix  '+ dir+'/'+name+'/');
        }
        if(config)
        {
            fs.writeFileSync(dir+'/'+name+'/Configs.ts',config)
        }
        let json=JSON.parse(fs.readFileSync(dir+'/'+name+'/package.json').toString());
        json.name=name;
        fs.writeFileSync(dir+'/'+name+'/package.json',JSON.stringify(json,null,4));
        if(api.valid)
        {
            this.addModule(api.name,dir+'/'+name);
        }
        if(endpoint.valid && endpoint.sessionManager=='JWT')
        {
            fs.mkdirSync(dir+'/'+name+'/security')
            
            crypto.generateKeyPair('rsa', {
                modulusLength: 1024,
                publicKeyEncoding: {
                type: 'spki',
                format: 'pem'
                },
                privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem'
                }
            }, (err, publicKey, privateKey) => {
                fs.writeFileSync(dir+'/'+name+'/security/jwtRS256.key',privateKey)
                fs.writeFileSync(dir+'/'+name+'/security/jwtRS256.key.pub',publicKey) 
            });
        }
        Log('The '+name +' project was created successfully',Colors.Green);        
    }
    
    static async addModule(moduleName:string,dir:string)
    {
        if(!moduleName)
        {
            Log('Wrong Name',Colors.Red)
        }
        if(!fs.existsSync(dir+'/package.json'))
        {
            return Log('Can not find package.json',Colors.Red);            
        }
        var folder=dir+'/modules';
        var name=new Name(moduleName);
        if(!fs.existsSync(folder))
        {
            fs.mkdirSync(folder);
        }
        folder+='/'+name.lowerCase;
        if(fs.existsSync(folder))
        {
            return Log('Module exist',Colors.Red)
        }
        fs.mkdirSync(folder);
        var modelsFolder=folder+'/models/';
        fs.mkdirSync(modelsFolder);
        fs.writeFileSync(modelsFolder+name.upperCase+'Config.ts',Files.serviceConfig(name));
        fs.writeFileSync(modelsFolder+'UserModel.ts',Files.userModel);
        fs.writeFileSync(folder+'/Index.ts',Files.serviceIndex(name));
    } 
}