import * as zmq from '../vendor/quickjs-zmq/quickjs-zmq.so';
import { setTimeout } from 'os';
import 'std';

/*
MIT License

Copyright (c) 2022 John O'Connor (sax1johno@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
const ZMQ_REP=4;

class Socket {
    static context = zmq.createContext();
    static errorCodeToString(errorCode) {
        return zmq.strerror(errorCode);
    }

    static formatError(errorCode) {
        return {"rc": errorCode, "description": Socket.errorCodeToString(errorCode)}
    }

    constructor(type=ZMQ_REP) {
        this.socket = zmq.createSocket(Socket.context, type);
        // console.log(this.socket);
        // Set up event listeners.
        this.listeners = {
            connected: [],
            disconnected: [],
            data: [],
            error: [] 
        };
        this.listening = false;
    }

    on(event, cb) {
        // console.log(`Attaching callback to ${event}`);
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(cb);
        // console.log(this.listeners[event].length);
    }

    destroy() {
        zmq.destroySocket(this.socket);
        zmq.destroyContext(this.context);
        this.emit("disconnected", this.socket);
        // this.socket = undefined;
        // this.context = undefined;
        this.listening = false;
    }

    emit(event, data={}) {
        // console.log(`Emitting ${event}`);
        if (!this.listeners[event]) return;
        // console.log(`Number of listeners for ${event} is ${this.listeners[event].length}`);
        for (var i = 0; i < this.listeners[event].length; i++) {
            // console.log(this.listeners[event][i]);
            this.listeners[event][i](data);
        }
    }

    bind(address) {
        return new Promise((resolve, reject) => {
            var returnValue = zmq.bindSocket(this.socket, address);
            if (returnValue == 0) {
                this.emit("connected");
                resolve(returnValue);
            } else {
                this.emit("error", Socket.formatError(returnValue));
                reject(returnValue);
            }
        });
    }

    async listen(address) {
        // console.log("Inside listen");
        await this.bind(address);
        // console.log(`Socket bind returned with ${returnCode}`);
        // if (returnCode < 0) {
        //     throw
        // }
        // console.log("Socket is bound");
        this.listening = true;
        while (this.listening) {
            // console.log("Listening");
            try {
                // console.log("Receive");
                var data = zmq.recvSocket(this.socket);
                // console.log(`Data: ${data}`);
                this.emit("data", data);
                zmq.sendSocket(this.socket, "OK");
                // console.log("After data");
            } catch (e) {
                console.log(e);
                this.destroy();
            }
        }
    }

    connect(address) {
        return new Promise((resolve, reject) => {
            var returnValue = zmq.connectSocket(this.socket, address);
            console.log(`Socket connected returned with ${returnValue}`);
            if (returnValue == 0) {
                this.emit("connected");
                resolve(returnValue);
            } else {
                this.emit("error", Socket.formatError(returnValue));
                reject(returnValue);
            }
        });
    }

    send(message) {
        return new Promise((resolve, reject) => {
            // console.log("In send");
            console.log(`Sending ${JSON.stringify(message)}`);
            var returnValue = zmq.sendSocket(this.socket, JSON.stringify(message));
            if (returnValue >= 0) {
                // this.emit("data");
                // 100ms timeout gives libzmq time to flush the message queue
                // Ensures that quick running clients still send message.
                setTimeout(() => {
                    resolve(returnValue);
                }, 100);            
            } else {
                this.emit("error", Socket.formatError(zmq_errno()));
                reject(returnValue);
            }
        });

    }

}
