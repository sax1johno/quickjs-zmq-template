import { GenericChannel, createEventBus, EventDeclaration } from "ts-event-bus";


export function createService(events, channels?:GenericChannel[]) {
    return createEventBus({
        channels: channels,
        events: events
    })
}