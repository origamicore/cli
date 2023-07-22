#!/usr/bin/env node
import cli from "commander";
import fs from 'fs'
import Files from "./src/files";
import Log, { Colors } from "./src/log";
import Name from "./src/name";
const { exec,spawn  } = require('child_process');
var pjson = require('../package.json');
class OriCli
{
    dir:string='';
    constructor()
    {
        
        var method=process.argv[2];
        var defaultVar=process.argv[3];
        this.dir=process.cwd(); 
        if(method=='--addservice'|| method=='-a')
        {
            Log('OriCli v'+pjson.version);
            this.addService(defaultVar);
        }
        else if(method=='--version' || method=='-v')
        {
            Log('Version '+pjson.version,Colors.Green)

        }
        else if(method=='--new' || method=='-n')
        {
            Log('OriCli v'+pjson.version);
            this.createProject(defaultVar);
        }
        else if(method=='--help' || method=='-h')
        {
            Log('OriCli v'+pjson.version);
            this.printHelp()
        }
        else
        {
            Log('OriCli v'+pjson.version);
            Log('Wrong arg',Colors.Read);
            this.printHelp()
        }
    }
    printHelp()
    {
        Log('Example usage')
        Log('   $ oricli <cammand> <options>')
        Log('')
        Log('Commands')
        Log('   --new,-n {{project name}}        create new project')
        Log('   --addservice,-a {{service name}}    create new service')
        Log('   --version.-v                        get oricli version')
        Log('')
    }
    async addService(serviceName:string)
    {
        if(!fs.existsSync(this.dir+'/package.json'))
        {
            return Log('Can not find package.json',Colors.Read);            
        }
        var folder=this.dir+'/services';
        var name=new Name(serviceName);
        if(!fs.existsSync(folder))
        {
            fs.mkdirSync(folder);
        }
        folder+='/'+name.lowerCase;
        if(fs.existsSync(folder))
        {
            return Log('Service exist',Colors.Read)
        }
        fs.mkdirSync(folder);
        var modelsFolder=folder+'/models/';
        fs.mkdirSync(modelsFolder);
        fs.writeFileSync(modelsFolder+name.lowerCase+'Config.ts',Files.serviceConfig(name));
        fs.writeFileSync(modelsFolder+'userModel.ts',Files.userModel);
        fs.writeFileSync(folder+'/index.ts',Files.serviceIndex(name));
    }
    async createProject(name:string)
    {
        Log('Create '+name);
        
        await this.execute('git -C '+this.dir+' clone https://github.com/origamicore/seed.git')
        fs.rmSync(this.dir+'/seed/.git', { recursive: true, force: true })
        fs.renameSync(this.dir+'/seed', this.dir+'/'+name);
        await this.execute('npm install --prefix  '+ this.dir+'/'+name);
        Log('The '+name +' project was created successfully',Colors.Green);        
    }
    execute(command:string):Promise<void>
    {
        return new Promise((res,rej)=>{
            exec(command).on('exit',()=>{
                res();
            })
        })
    }
}
new OriCli();