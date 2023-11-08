 

let strFunction=`
function DBRef(collection,oid)
{
    let {DBRef,ObjectId} = require('mongodb')
    return new DBRef(collection,new ObjectId(oid))
}
function Timestamp(low,high)
{
    if(!low || !high) throw ''
    if(low.constructor.name=='Date')low=Math.floor(low.getTime()/1000)
    if(high.constructor.name=='Date')high=Math.floor(high.getTime()/1000)
    let {Timestamp} = require('mongodb')
    return new Timestamp({i:low,t:high})
}
function ISODate(data)
{
    return new Date(data)
}
function ObjectId(data)
{
    let {ObjectId} = require('mongodb')
    return new ObjectId(data)
}
function MinKey()
{
    let {MinKey} = require('mongodb')
    return new MinKey()
}
function MaxKey()
{
    let {MaxKey} = require('mongodb')
    return new MaxKey()
}
(function test(){ 
    
    return {{DOCUMENT}}
})()` 
export default class Checker
{
    static check(doc:string)
    { 
        try{
            let document =strFunction.replace('{{DOCUMENT}}',doc)  
            let a= eval(document)
            console.log('........',a)
            return true
        }catch(exp){
            console.log(exp)
        }
        return false;
    }
    static getValue(doc:string)
    { 
        try{
            let document =strFunction.replace('{{DOCUMENT}}',doc)  
            let a= eval(document) 
            return a
        }catch(exp){
            console.log(exp)
        }
        return null;
    }
}