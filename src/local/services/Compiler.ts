import ProjectModel from "@origamicore/projectmodels";
import fs from 'fs'
const { exec,spawn  } = require('child_process'); 
import StaticModuleCompiler from "./StaticModuleCompiler";
import ModuleCompiler from "./ModuleCompiler";
export default class Compiler
{
    static path:string=''; 
    static execute(command:string):Promise<void>
    {
        return new Promise((res,rej)=>{
            exec(command).on('exit',()=>{
                res();
            })
        })
    }
    static createConfigFile(model:ProjectModel)
    {
        let config='import {ConfigModel} from "@origamicore/core";\n';
        config+='import fs from "fs";\n'
        config+=StaticModuleCompiler.getImports(model.staticModules);

        config+='export default new ConfigModel({\n'
        config+='    packageConfig:[\n'
        config+=StaticModuleCompiler.Compile(model.staticModules) 
        config+='    ]\n'
        config+='});\n'
        console.log(this.path+'/Configs.ts');
        
        fs.writeFileSync(this.path+'/Configs.ts',config)
    }
    static async installModules(model:ProjectModel)
    {
        let packages=JSON.parse(fs.readFileSync(this.path+'/package.json').toString()); 
        let staticnpm=StaticModuleCompiler.getModules(model.staticModules);
        for(let npm of staticnpm)
        {
            if(!packages.dependencies[npm])
            {
                console.log('install ' + npm);
                
                await this.execute('npm install '+npm+' --prefix  '+ this.path+'/');
            }
        }
    }
    static async compile(model:ProjectModel)
    {
        this.path=process.cwd();
        this.createConfigFile(model) 
        await this.installModules(model)
        await ModuleCompiler.Compile(model,this.path)
       // await this.execute('npm run build --prefix  '+ this.path+'/');
    }
}