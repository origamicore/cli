export default class Name
{
    lowerCase:string='';
    upperCase:string='';
    constructor(name:string)
    { 
        if(!name)return;
        this.lowerCase= name[0].toLocaleLowerCase()+name.substring(1,name.length)
        this.upperCase= name[0].toLocaleUpperCase()+name.substring(1,name.length)
    }
}