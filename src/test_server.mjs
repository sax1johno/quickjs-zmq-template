import { Zmq, Socket, ZMQ_REP } from './quickjs-zmq.mjs'
import * as os from "os";
import * as std from "std";

console.log(JSON.stringify(Zmq.version()));

var sock = new Socket(ZMQ_REP);
console.log("Created new socket");

// Set up listeners.
sock.on("connected", (data) => {
    console.log("Socket connected");
});

sock.on("disconnected", (data) => {
    console.log("Socket disconnected");
    // sock.destroy();
});

sock.on("data", (data) => {
   console.log(`Data Received: ${data}`); 
});

sock.on("error", (data) => {
    console.log(JSON.stringify(data));
});

var end = () => {
    // Clean up the socket before killing.
    console.log("Cleaning up now");
    sock.destroy();
    std.exit(0);
}

os.signal(os.SIGINT, end);
// os.signal(os.SIGQUIT, end);
// os.signal(os.SIGHUP, end);

console.log(JSON.stringify(sock));

console.log("Binding the socket now");
(async(sock) => {
    var returnCode = await sock.listen("tcp://*:5555");
    console.log(returnCode);
})(sock);
