import { ModuleConfig, OriInjectable, OriService, PackageIndex } from "@origamicore/core";
import UI from "../ui/Ui";
import ProjectModel, { ModuleModel } from "@origamicore/projectmodels";
import Project from "../project/Project";
import Compiler from "./services/Compiler";
import DbService from "../ui/Db";
import Checker from "../ui/documentChecker/checker";



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
    async checkDocument(document:string)
    { 
        let ui=UI.getUI()
        return  Checker.check(document)
       
    }
    @OriService({isPublic:true})
    async deleteCollection(name:string,dbname:string,collection:string)
    { 
        let ui=UI.getUI()
        let con=ui.dbConnection.filter(p=>p.name==name)[0]
        if(con)
        {
           return await  DbService.deleteCollection(con,dbname,collection)
        }
    }
    @OriService({isPublic:true})
    async deleteDatabase(name:string,dbname:string)
    { 
        let ui=UI.getUI()
        let con=ui.dbConnection.filter(p=>p.name==name)[0]
        if(con)
        {
           return await  DbService.deleteDatabase(con,dbname)
        }
    }
    @OriService({isPublic:true})
    async createCollection(name:string,dbname:string,collection:string)
    { 
        let ui=UI.getUI()
        let con=ui.dbConnection.filter(p=>p.name==name)[0]
        if(con)
        {
           return await DbService.createCollection(con,dbname,collection)
        }
    }
    @OriService({isPublic:true})
    async newData(name:string,dbname:string,collection:string,document:any)
    { 
        let ui=UI.getUI()
        let con=ui.dbConnection.filter(p=>p.name==name)[0]
        if(con)
        {
           return await  DbService.newData(con,dbname,collection,document)
        }
    }
    @OriService({isPublic:true})
    async saveData(name:string,dbname:string,collection:string,document:string)
    { 
        let ui=UI.getUI()
        let con=ui.dbConnection.filter(p=>p.name==name)[0]
        if(con)
        {
           return await  DbService.saveData(con,dbname,collection,document)
        }
    }
    @OriService({isPublic:true})
    async getData(name:string,dbname:string,collection:string,option:any,filter:any)
    { 
        let ui=UI.getUI()
        let con=ui.dbConnection.filter(p=>p.name==name)[0]
        if(con)
        {
           return await  DbService.getData(con,dbname,collection,option,filter)
        }
    }
    @OriService({isPublic:true})
    async getDbs(name:string)
    { 
        let ui=UI.getUI()
        let con=ui.dbConnection.filter(p=>p.name==name)[0]
        if(con)
        {
           return  await DbService.getDb(con)
        }
    }
    @OriService({isPublic:true})
    async getCollections(name:string,dbname:string)
    { 
        let ui=UI.getUI()
        let con=ui.dbConnection.filter(p=>p.name==name)[0]
        if(con)
        {
           return await  DbService.getCollections(con,dbname)
        }
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