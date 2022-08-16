import { Zmq, Socket, ZMQ_REQ } from './quickjs-zmq.mjs'

import * as os from "os";

console.log(JSON.stringify(Zmq.version()));

var sock = new Socket(ZMQ_REQ);
console.log("Created new socket");

// Set up listeners.
sock.on("connected", (data) => {
    console.log("socket connected");
});

sock.on("disconnected", (data) => {
    console.log("Socket disconnected");
});

sock.on("data", (data) => {
   console.log(JSON.stringify(data)); 
});

sock.on("error", (data) => {
    console.log(JSON.stringify(data));
});

console.log("Binding the socket now");
(async(sock) => {
    var returnCode = await sock.connect("tcp://localhost:5555");
    console.log(returnCode);
    var testObject = {
        "key1": "value",
        "key2": "value"
    };
    sock.send(testObject).then((responseCode) => {
        console.log(`Success: ${responseCode}`);
    }, (responseCode) => {
        console.log(`Error code ${responseCode}`);
    })
    // console.log(`Sent with ${returnValue}`);
    // sock.send("Test").then((responseCode) => {
    //     console.log(`Sent with ${responseCode}`);
    //     console.log("Sent test");        
    // }, (responseCode) => {
    //     console.log(`Failed with ${responseCode}`);
    // });
    // Wait for 100 ms for libzmq to flush the message queue.

    // sock.destroy();
})(sock);