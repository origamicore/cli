export default class GenModel
{
    imports:string;
    config:string;
    constructor(data:{
        imports:string;
        config:string;
    })
    {
        Object.assign(this,data);
    }
}