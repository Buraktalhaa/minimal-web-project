import {WebSocketServer, WebSocket} from 'ws';

const ws = new WebSocketServer({port:8080});    // duzenlencek

console.log("Server is running on port 8080")

ws.on("connection" ,(ws) => {
    console.log('WebSocketServer start..')
    ws.on('message', (data) => {
        const formMessage = JSON.parse(data.toString());
        const command = formMessage.command;
        const gender = formMessage.gender;
        const personName = formMessage.personName;
        const surname = formMessage.surname;
        const email = formMessage.email;
        const requestType = formMessage.requestType;
        const message = formMessage.message;

        console.log(formMessage)

        if(command === 'sendFormValues'){
            // databaseye gonderme
            
        }
    })
})

