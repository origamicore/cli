import { ModuleConfig, OriInjectable, OriService, PackageIndex } from "@origamicore/core";
import UI from "../ui/Ui";
import ProjectModel, { ModuleModel } from "@origamicore/projectmodels";
import Project from "../project/Project";
import Compiler from "./services/Compiler";



@OriInjectable({domain:'api'})
export default class LocalService implements PackageIndex
{
    name:string='api'; 
    jsonConfig(config:ApiConfig ): Promise<void> {  
        return ;
    }
    start(): Promise<void> {
        return;
    }
    restart(): Promise<void> {
        return;
    }
    stop(): Promise<void> {
        return;
    }
    
    @OriService({isPublic:true})
    async compile()
    { 
    }
    @OriService({isPublic:true})
    async createProject(name:string)
    { 
        await Project.createProjectInFolder(name,process.cwd())

    }
    @OriService({isPublic:true})
    async addModule(name:string)
    { 
        let ui= UI.getUI()
        if(ui.modules.filter(p=>p.name==name)[0])
        {
            return 
        }
        await Project.addModule(name,process.cwd())
        ui.modules.push(new ModuleModel({name}))
        UI.saveUI(ui)
    }
    @OriService({isPublic:true})
    async getProject()
    { 
        //Compiler.compile(UI.getUI())
        return UI.getUI()
    }
    @OriService({isPublic:true})
    async save(model:ProjectModel)
    { 
        console.log('>>>',model.modules[0]);
        
        // Compiler.compile(model)
        UI.saveUI(model)
    }

}
export class ApiConfig extends ModuleConfig
{
    async createInstance(): Promise<PackageIndex> {
        var instance=new LocalService();
        await instance.jsonConfig(this);
        return instance;
    }
    dbContext:string;
    redisContext:string;
    public constructor(
        
        fields?: {
            id?:string
            name?: string, 
            dbContext?:string  
            redisContext?:string
        }) {

        super(fields);
        if (fields) Object.assign(this, fields);
    }
}