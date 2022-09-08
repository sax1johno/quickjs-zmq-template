import { Zmq, Socket, ZMQ_REP, ZMQ_ROUTER } from '../vendor/quickjs-zmq/quickjs-zmq.mjs'
import * as os from "os";
import * as std from "std";
import { NAMESERVER_LOCATION, NAMESERVER_PORT } from './settings.js';

var sock = new Socket(ZMQ_ROUTER);
console.log("Created new nameserver");

// Set up listeners.
sock.on("connected", (data) => {
    console.log("Service connected to socket");
    console.log(JSON.stringify(data));
});

sock.on("disconnected", (data) => {
    console.log("Service disconnected");
    // sock.destroy();
    console.log(JSON.stringify(data));
});

sock.on("data", (data) => {
   console.log(`Data Received: ${JSON.stringify(data)}`); 
});

sock.on("error", (data) => {
    console.log(JSON.stringify(data));
});

var end = () => {
    // Clean up the socket before killing.
    console.log("Cleaning up nameserver now");
    sock.destroy();
    std.exit(0);
}

os.signal(os.SIGINT, end);
// os.signal(os.SIGQUIT, end);
// os.signal(os.SIGHUP, end);

// console.log(JSON.stringify(sock));

console.log("Binding the nameserver socket now");
(async(sock) => {
    var returnCode = await sock.listen(`tcp://*:${NAMESERVER_PORT}`);
    console.log(returnCode);
})(sock);
