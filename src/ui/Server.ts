import { WebService } from "@origamicore/base";
import UiModel from "./models/UiModel";

const url='http://uiapi.origamicore.com'
// const url='http://localhost:4000'
export default class Service
{
    static async Login(id:string,projectId:string):Promise<{token:string}> 
    {
        return (await WebService.post(url+'/auth/loginByToken',{id,projectId},null,null) )as {token:string}; 
    }
    static async addProject(id:string,token:string)
    {
        return (await WebService.post(url+'/api/addProject',{id},{authorization:token},null) )as any;  
    }
    static async updateUi(model:UiModel)
    {
        let token=model.token;
        delete model.token;
        return (await WebService.post(url+'/api/updateUi',{model},{authorization:token},null) )as any;  
    }
}