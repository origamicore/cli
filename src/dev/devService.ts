import fs from 'fs'
import CommonService from '../commonService';
import Log, { Colors } from '../log';
import OrigamiCore, { ConfigModel } from '@origamicore/core';
import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import RuntimeType from './runtimeType';
const { exec } = require('child_process');

let changes:string[]=[];
let mainConfig:ConfigModel;
let origamicore:OrigamiCore;
let ignore=['dist','node_modules']
let cp: ChildProcessWithoutNullStreams;
export default class DevService
{
    static async reset(runtime:RuntimeType,force:boolean=false)
    {
        if(!changes.length && !force)return;
        changes=[]
        let dir =process.cwd();
        Log('Building ...')
        try
        {
            if(runtime==RuntimeType.Nodes)
            {
                await CommonService.runCommand('npx tsc --project '+dir+'')
            }
            if(cp)cp.kill();
            if(runtime==RuntimeType.Nodes)
            {
                cp = spawn("node",[dir+'/dist/Index.js'])
            }
            else
            {
                let path=dir+'/Index.ts'
                if(!fs.existsSync(path))path=dir+'\\Index.ts'
                
                cp = spawn("bun",[path]) 
            }
            Log('Start' )  
            cp.stderr.on('data', (data) => {
                console.log(`stderr: ${data}`);
            })
            cp.stdout.on('data', (data) => {
                console.log(`stdout: ${data}`);
            });

        }catch(exp){
            
            Log('Error ',Colors.Red)
            Log(exp,Colors.Red) 
        }
    }
    static async compile(runtime:RuntimeType)
    { 
        if(runtime==RuntimeType.Nodes)
        {
            Log('Installing ...')
            await CommonService.runCommand('npm i ')

        }
        await this.reset(runtime,true)
        let isBusy=false;
        setInterval(async()=>{ 
            if(isBusy)return;
            isBusy=true;
            try{
                await this.reset(runtime)
            }catch(exp){}
            isBusy=false;
        },1000)
    } 
    static async runProject(runtime:RuntimeType)
    {
        let dir =process.cwd();
        await this.compile(runtime)  
        fs.watch(dir,{recursive:true},async(data,file)=>{ 
            
            if(!file)return
            let isIgnore=false
            for(let i of ignore)
            {  
                if(file.indexOf(i)== 0 || file==i)
                {
                    isIgnore=true;
                }
            }
            if(!isIgnore)
            {
                changes.push(file)
            }
        }) 
    }
}