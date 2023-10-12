const { exec,spawn  } = require('child_process');
export default class CommonService
{
    static runCommand(command:string,showLog:boolean=false)
    {  
        return new Promise((res,rej)=>{
            exec(command ,(error, stdout, stderr)=>{
                if(showLog)
                    console.log(error, stdout, stderr);
                if(error)
                {
                    rej(error)
                }
                else
                {
                    res({})
                } 
            })
        }) 
    }
}