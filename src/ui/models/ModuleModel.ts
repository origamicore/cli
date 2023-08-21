export default class ModuleModel
{
    name:string;
    constructor(data:{
        name:string;
    })
    {
        Object.assign(this,data)
    }
}