import { 
    slot, 
    EventDeclaration, 
    GenericChannel,
    createEventBus    
 } from "ts-event-bus";

 export abstract class AbstractBaseService {
     _eventBus;

    constructor(events?: any, channels?:GenericChannel[]) {
        this._eventBus = createEventBus({
            events: events,
            channels: channels
        });
    }

    /**
     * Emit a message to the event bus for this service.
     * @param {String} eventName The name of the event to emit.
     * @param {any} data Optional data to pass into the event (must match the event specification) 
     * @returns {Promise} a promise that resolves when the event is sent and rejects otherwise.
     */
    emit(eventName: string, ...data: any): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                resolve(this._eventBus[eventName](...data));
            } catch (e) {
                reject(e);
            }
        })
    }

    get EventBus() {
        return this._eventBus;
    }
 }