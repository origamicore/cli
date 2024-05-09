var Prompt = require('prompt-checkbox');
var Radio = require('prompt-radio');
import readline from 'node:readline';
var prompt = require('prompt-sync')();
export default class Prompts
{
    static getNumber(title:string,defValue:number):number
    {
      let num=defValue
      var n = prompt(title);
      try{
          num= parseInt(n) 
          if(isNaN(num))num=defValue
      }catch(exp){}
      return num  
    }
    static getString(title:string,defValue:string):string
    { 
      var n = prompt(title);
      if(!n)n=defValue
      return n 
    }
    static packages=new Prompt({
        name: 'Packages',
        message: 'Select default packages?',
        default: ['API','Express','MongoDB'],
        choices: [
          'API',
          'Express',
          'Socket',
          'MongoDB',
        //   'RDBMS',
          'Redis'
        ]
      });
      
    static Manual=new Radio({
        name: 'Set Default',
        message: 'Do you want defalut config ?',
        default: 'Default',
        choices: [
          'Default',
          'Custom', 
        ]
      });
      
    static sessionManager=new Radio({
        name: 'Session Manager',
        message: 'Select session manager?',
        default:  'JWT'  , 
        choices: [
          'Default',
          'JWT',
          'Redis' 
        ] 
      });
}