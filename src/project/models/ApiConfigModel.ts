import Name from "../../name";
import Prompts from "../Prompts";
import GenModel from "./GenModel";

export default class ApiConfigModel
{
    valid:boolean=false; 
    name:string='api';
    constructor(config:string[],npm:string[])
    {
        this.valid= config.indexOf('API')>-1  ;  
    }
    async runCustom()
    { 
        if(!this.valid)return;
        this.name = await Prompts.getString(`Enter Api name :`,this.name) ;
        console.log(this.name);
    }
    getConfig()
    { 
        var name=new Name(this.name);
        let str=`
        new ${name.upperCase}Config({ 
           dbContext:'default'
        }), `; 
        let imports=`import ${name.upperCase}Config from "./modules/${name.lowerCase}/models/${name.upperCase}Config";`;
        return new GenModel({
            config:str,
            imports 
        })
    }
}