import { WebService } from "@origamicore/base";
import fs from 'fs' 
import Log, { Colors } from "../log";
import Service from "./Server";
import Listener from "./Listener"; 
import Project from "../project/Project"; 
import ProjectModel, { ModuleModel, ResponseType, StaticModule ,EndpointConfig, EndpointConnection,MongoConfig, MongoConnection, RedisConfig, RedisConnection} from "@origamicore/projectmodels";
const uuid=require('uuid'); 
export default class UI
{
    static saveUI(ui:ProjectModel)
    {
        let path = process.cwd()+'/.ui';
        fs.writeFileSync(path,JSON.stringify(ui));
    }
    static getUI():ProjectModel
    {
        let dir=process.cwd()
        let path = dir+'/.ui'; 
        if(!fs.existsSync(path))
        {
            let project=new ProjectModel({
                id:uuid.v4(),
                staticModules:[
                    new StaticModule({
                        name:'endpoint',
                        config:new EndpointConfig({
                            connections:[
                                new EndpointConnection({port:3000})
                            ]
                        })
                    }),
                    new StaticModule({
                        name:'mongo',
                        config:new MongoConfig({
                            connections:[
                                new MongoConnection({
                                    name:'mongoContext',
                                    database:'dbname'
                                })
                            ]
                        })
                    }),
                    new StaticModule({
                        name:'redis',
                        config:new RedisConfig({
                            connections:[
                                new RedisConnection({
                                    db:0
                                })
                            ]
                        })
                    }),

                ]
            })
            fs.writeFileSync(path,JSON.stringify(project));
        }
        let ui= new ProjectModel(JSON.parse(fs.readFileSync(path).toString()) )
        if(!ui.name)
        {
            if(fs.existsSync(dir+'/package.json'))
            {
                let json=JSON.parse(fs.readFileSync(dir+'/package.json').toString());
                if(json.name)
                {
                    ui.name=json.name
                }
                else
                {
                    ui.name='No Name'
                }
            }
            this.saveUI(ui)
        } 
        return ui
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
                Log('Token not founed',Colors.Red);
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