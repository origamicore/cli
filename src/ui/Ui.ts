import { WebService } from "@origamicore/base";
import fs from 'fs'
import UiModel from "./models/UiModel";
import Log, { Colors } from "../log";
import Service from "./Server";
import Listener from "./Listener";
import { ResponseType } from "./models/ResponseType";
import Project from "../project/Project";
import ModuleModel from "./models/ModuleModel";
const uuid=require('uuid'); 
export default class UI
{
    static saveUI(ui:UiModel)
    {
        let path = process.cwd()+'/.ui';
        fs.writeFileSync(path,JSON.stringify(ui));
    }
    static getUI():UiModel
    {
        let path = process.cwd()+'/.ui'; 
        if(!fs.existsSync(path))
        {
            fs.writeFileSync(path,JSON.stringify({id:uuid.v4()}));
        }
        return new UiModel(JSON.parse(fs.readFileSync(path).toString()) )
    }
    static async work(data:any)
    {
        let ui=UI.getUI();
        let dir =process.cwd();
        if(data.type==ResponseType.CreateProject)
        {
            Project.createProjectInFolder(data.name,dir)  
            ui.name=data.name;     
            UI.saveUI(ui)
        }
        if(data.type==ResponseType.AddModule)
        {
            let exist=ui.modules.filter(p=>p.name==data.name)[0]
            if(!exist)
            {
                Project.addModule(data.name,dir)
                ui.modules.push(new ModuleModel({name:data.name}))
                UI.saveUI(ui)
            }
        }
        await Service.updateUi(ui)
    }
    static async connect(id:string)
    {
        let ui=this.getUI();
        if(!ui.token)
        {
            let data=await Service.Login(id,ui.id);
            
            if(data.token)
            {
                ui.token=data.token;
                this.saveUI(ui)
            }
            else
            {
                Log('Token not founed',Colors.Read);
                return
            } 
        } 
        if(!ui.registerd)
        {
            let data:any = await Service.addProject(ui.id,ui.token);
            console.log(data);
            
            ui.registerd=true;
           // this.saveUI(ui)
        }
        let listener=new Listener();
        listener.init(ui.id,ui.token,this.work)
        await Service.updateUi(ui)
    }
}