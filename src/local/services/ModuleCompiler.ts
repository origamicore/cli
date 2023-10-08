import ProjectModel, { ModuleModel } from "@origamicore/projectmodels";
import Name from "../../name";
import fs from 'fs'
export default class ModuleCompiler
{
    static  getImports(model:ProjectModel):string
    {
        let str=''
        return str;
    }
    static async createConfigFile(model:ModuleModel,path:string)
    {
        var name=new Name(model.name); 
        let str='import { ModuleConfig, PackageIndex } from "@origamicore/core";';
        str+='import '+name.upperCase+'Service from "../Index";\n'
        str+='export default class '+name.upperCase+'Config extends ModuleConfig\n'
        str+='{\n'
        str+='    async createInstance(): Promise<PackageIndex> {\n'
        str+='        var instance=new '+name.upperCase+'Service();\n'
        str+='        await instance.jsonConfig(this);\n'
        str+='        return instance;\n'
        str+='    }\n'
        str+='    public constructor(\n'
        str+='        fields?: {\n'
        str+='        }) {\n'
        str+='        super(fields);\n'
        str+='        if (fields) Object.assign(this, fields);\n'
        str+='    }\n'
        str+='}\n' 
        let dir=path+'/modules/'+model.name+'/models';
        if(!fs.existsSync(dir))
        {
            fs.mkdirSync(dir,{recursive:true}) 
        }
        fs.writeFileSync(dir+'/'+name.upperCase+'Config.ts',str)

    } 
    static async createIndexFile(model:ModuleModel,path:string)
    {
        var name=new Name(model.name); 
        let configName=name.upperCase+'Config';
        
        let str='import { OriInjectable, OriService, PackageIndex, ResponseDataModel ,RouteResponse,SessionInput,HttpMethod';
        str+=' } from "@origamicore/core";\n'
        str+='import '+configName+' from "./models/'+configName+'";\n'
        str+='@OriInjectable({domain:\''+model.name+'\'})\n'
        str+='export default class '+name.upperCase+'Service implements PackageIndex\n'
        str+='{\n'
        str+='    name:string=\''+model.name+'\';\n'
        str+='    config:'+configName+';\n'
        str+='    async jsonConfig(config: '+configName+'): Promise<void> { \n'
        str+='        this.config=config;\n'
        str+='    }\n'
        str+='    async start(): Promise<void> { }\n'
        str+='    async restart(): Promise<void> {  }\n'
        str+='    async stop(): Promise<void> { }\n'
        for(let srv of model.services)
        {
            for(let decorator of srv.decorators)
            {
                if(decorator.name=='OriService')
                {
                    str+='\n    @OriService({\n'
                    if(decorator.data.isEvent)
                    {
                        str+='        isEvent:true,\n'
                    }
                    if(decorator.data.isInternal)
                    {
                        str+='        isInternal:true,\n'
                    }
                    if(decorator.data.isPublic)
                    {
                        str+='        isPublic:true,\n'
                    }
                    if(decorator.data.service)
                    {
                        str+='        service:"'+decorator.data.service+'",\n'
                    }
                    if(decorator.data.route)
                    {
                        str+='        route:"'+decorator.data.route+'",\n'
                    }
                    if(decorator.data.method)
                    {
                        let method=decorator.data.method
                        if(method=='Any')method='None'
                        str+='        method:HttpMethod.'+method+',\n'
                    }
                    str+='    })\n'
                }
                else
                {
                    str+='    @'+decorator.name+'({\n'
                    for(let dt in decorator.data)
                    {
                        str+= dt+':'+ decorator.data[dt]+ ',\n'
                    } 
                    str+='    })\n'
                }

            }
            str+='    async '+srv.name+'(' 
            for(let variable of srv.variables)
            {  
                if(variable.decorator.name=='Odata')
                { 
                    str+='@OdataInput ' + variable.name+':OdataModel,'
                }
                else if(variable.decorator.name=='Session')
                { 
                    str+='@SessionInput '+ variable.name+','
                }
                else if(variable.decorator.name=='Event')
                { 
                    str+='@EventInput '+ variable.name+':(data:'+variable.classType+')=>void,'
                }
                else if(variable.decorator.name=='Data')
                { 
                    str+='@DataInput({'
                    if(variable.isRequired)
                        str+='isRequired:true'
                    str+='})'+ variable.name+':'+variable.classType+','
                } 
                else
                { 
                    str+=variable.name+':'+variable.classType+','

                } 
            }
            if(srv.variables.length)
            {
                str=str.substring(0,str.length-1)
            }
            str+=''
            str+=')'
            if(srv.output.classType)
            {
                str+=':Promise<'+srv.output.classType+'>'
            }
            else
            {
                str+=':Promise<any>'
                
            }
            str+='\n    {\n'
            str+='\n'
            str+='    }\n'

        }
        str+='\n'
        str+='}\n'
        let dir=path+'/modules/'+model.name;
        if(!fs.existsSync(dir))
        {
            fs.mkdirSync(dir,{recursive:true}) 
        }
        fs.writeFileSync(dir+'/Index.ts',str)
    }
    static async Compile(model:ProjectModel,path:string)
    {
        for(let module of model.modules)
        {
            this.createIndexFile(module,path)
            this.createConfigFile(module,path)
        }
    }

}