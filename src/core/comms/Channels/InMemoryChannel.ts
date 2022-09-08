/**
 * A ts-event-bus for communicating with other services via memory.
 * This is useful for processes that run stand alone and don't want to include any additional networking.
 * 
 * These are typically embedded into a runtime that connects additional services together using a networking layer.
 */

 import {Channel, GenericChannel, TransportMessage} from 'ts-event-bus';
import { OnMessageCallback } from 'ts-event-bus/build/Channel';

 export class InMemoryChannel extends GenericChannel {
     constructor(timeout) {
         super(timeout)
     }
    
     private _messageQueue = {}
     autoReconnect?: () => void;
     send: (message: TransportMessage) => void;
     onData: (cb: OnMessageCallback) => void;
     onConnect: (cb: () => void) => void;
     onDisconnect: (cb: () => void) => void;
     onError: (cb: (e: Error) => void) => void;
 }