import ModuleModel from "./ModuleModel";

export default class UiModel
{
    id:string;
    token:string;
    registerd:boolean;
    name:string;
    modules:ModuleModel[]=[]
    constructor(data)
    {
        Object.assign(this,data);
    }
}