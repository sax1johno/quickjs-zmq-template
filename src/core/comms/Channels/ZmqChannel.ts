// @ts-nocheck
import { GenericChannel } from 'ts-event-bus';
import { Zmq, Socket, ZMQ_ROUTER } from './quickjs-zmq.mjs'

const DEFAULT_TIMEOUT = 5000;
const DEFAULT_BIND_ENDPOINT="tcp://*:5555";
const DEFAULT_CONNECT_ENDPOINT="tcp://localhost:5555";

export class ZmqServerChannel extends GenericChannel {
    private static _MAX_RETRIES = 3
    private _tries = 0    
    private _server;

    constructor(private _port: number) {
        super()
        this._init()
    }

    private _init(): void {
        if (++this._tries === ZmqServerChannel._MAX_RETRIES) {
            return
        }

        const server = new Socket(ZMQ_ROUTER);

        server.on('connected', (data) => {

        });

        server.on('disconnected', (data) => {

        });

        
        // server.on('connection', ws => {
        //     this._ws = ws
        //     this._ws.on('close', reinit)
        //     this._ws.on('error', e => {
        //         this._error(e)
        //         reinit()
        //     })
        //     this._ws.on('message', (message: string) => {
        //         let parsedData
        //         try {
        //             parsedData = JSON.parse(message)
        //         } catch (err) {
        //             this._error(err)
        //             return
        //         }
        //         this._messageReceived(parsedData)
        //     })
        //     this._connected()
        // })
    }

    send(message: {}) {
        if (!this._ws) {
            return
        }
        this._ws.send(JSON.stringify(message))
    }
    // constructor(private _connectionString: string = DEFAULT_CONNECT_CONNECTION_STRING, private _bindString: string = DEFAULT_BIND_CONNECTION_STRING) {
    //     super(DEFAULT_TIMEOUT);
    //     if (!_server) {
    //         // No server has been created yet, so create one.
    //         ZmqChannel._server = new Socket(ZMQ_REP);
    //         this._server = ZmqChannel._server;
    //     } else {
    //         // Server has already been created, so just use it.
    //         this._server = ZmqChannel._server;
    //     }
    // }


}