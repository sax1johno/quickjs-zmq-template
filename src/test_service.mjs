// import { Zmq, Socket, ZMQ_REP } from './quickjs-zmq.mjs'
import * as os from "os";
import * as std from "std";
import { Zmq, Socket, ZMQ_REQ, ZMQ_REP, ZMQ_ROUTER } from '../vendor/quickjs-zmq/quickjs-zmq.mjs';

import {NAMESERVER_LOCATION, NAMESERVER_PORT} from "./settings.js"

console.log(JSON.stringify(Zmq.version()));

var service = new Socket(ZMQ_ROUTER);
var nameService = new Socket(ZMQ_REQ);
// console.log("Created new socket");

const IP = 'localhost';
const PORT=5556;
nameService.on("connected", (data) => {
    console.log(`NameService connected: ${data}`);
});

nameService.on("disconnected", (data) => {
    console.log("NameService disconnected");
});

nameService.on("data", (data) => {
    console.log(JSON.stringify(data));
});

// Set up listeners.
service.on("connected", (data) => {
    console.log("Socket connected");
});

service.on("disconnected", (data) => {
    console.log("Socket disconnected");
    // sock.destroy();
});

service.on("data", (data) => {
   console.log(`Data Received: ${data}`); 
});

service.on("error", (data) => {
    console.log(JSON.stringify(data));
});

var end = () => {
    // Clean up the socket before killing.
    console.log("Cleaning up now");
    service.destroy();
    std.exit(0);
}

os.signal(os.SIGINT, end);
// os.signal(os.SIGQUIT, end);
// os.signal(os.SIGHUP, end);

console.log(JSON.stringify(service));

console.log("Binding the socket now");
(async(nameService, service) => {
    console.log(`tcp://${NAMESERVER_LOCATION}:${NAMESERVER_PORT}`);
    var returnCode = await nameService.connect(`tcp://${NAMESERVER_LOCATION}:${NAMESERVER_PORT}`);
    // Send an initialization message letting the name server know about this service
    // and inject any dependent services.
    console.log(`Return code: ${returnCode}`);
    var testObject = {
        "command": "init",
        "contractName": "us.propl.echo",
        "tz": Date.now(),
        "ip": "localhost",
        "port": PORT
    };
    console.log("Test Object");
    var initRC = await nameService.send(testObject);
    console.log(`Init RC = ${initRC}`);
    var listenRc = await service.listen(`tcp://*:${PORT}`);
    console.log(`Listen RC = ${listenRc}`);
    console.log(`Listening on port ${PORT}`)
    // }, (responseCode) => {
    //     console.log(`Error code ${responseCode}`);
    // }).then((rc) => {
    //     console.log(`Success: ${rc}`);
    // }, (errorCode) => {
    //     console.log(`Error code ${responseCode}`);
    // })
})(nameService, service);
