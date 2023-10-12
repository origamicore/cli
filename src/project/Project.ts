import Log, { Colors } from "../log";
import fs from 'fs'
import Name from "../name";
import Files from "../files";
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
        
        await this.execute('git -C '+dir+' clone https://github.com/origamicore/seed.git')
        fs.rmSync(dir+'/seed/.git', { recursive: true, force: true })
        fs.renameSync(dir+'/seed', dir+'/'+name);
        await this.execute('npm install --prefix  '+ dir+'/'+name+'/');
        let json=JSON.parse(fs.readFileSync(dir+'/package.json').toString());
        json.name=name;
        fs.writeFileSync(dir+'/package.json',JSON.stringify(json,null,4))
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