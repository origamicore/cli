const { exec,spawn  } = require('child_process');
export default class CommonService
{
    static runCommand(command:string,showLog:boolean=false)
    {  
        return new Promise((res,rej)=>{
            exec(command ,(error, stdout, stderr)=>{
                if(showLog)
                {

                    console.log( error);
                    console.log( stdout);
                    console.log( stderr);

                }
                if(error)
                {
                    rej(stdout)
                }
                else
                {
                    res({})
                } 
            })
        }) 
    }
}