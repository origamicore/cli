

var WebSocketClient  = require('websocket').client;
// let url='ws://localhost:4001'
let url='ws://uisocket.origamicore.com'
export default class Listener
{
    connection:any;
    init(id:string,token:string,event:(data:any)=>void)
    {
        let client=new WebSocketClient(); 
        client.on('connect',  (connection)=> {
            this.connection=connection
            connection.on('message', (message)=> { 
                if (message.type === 'utf8') {
                   let msg=JSON.parse(message.utf8Data); 
                   let data=msg.data.response.data;
                   if(data)
                   {
                        event(data)
                   }
                }
            });
            
            this.connection.sendUTF(JSON.stringify({
                domain:'api',
                service:'listen',
                param:{id},
                token
            }) );
        })
        client.connect(url, 'echo-protocol');

    }

}