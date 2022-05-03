import { interpret } from "xstate";
import ActorFactory from "./ActorMachineFactory";
// Add this import for quickjs-compatible build
import * as os from "os";
import * as std from "std"
import { stateValuesEqual } from "xstate/lib/State";

export default class Actor {
    service;

    constructor(machine) {

        this.service = interpret(ActorFactory(machine), {
            clock: {
                setTimeout: os.setTimeout,
                clearTimeout: os.clearTimeout
            }
        });

        this.service.onTransition((state) => {
            console.log("Parent: ", JSON.stringify(state));
          });
        
    }
    
    start() {
        return new Promise((resolve, reject) => {
            this.service.start();
            this.service.onDone((event) => {
                // console.log("Actor service has completed - shutting down.");
                console.log("Actor Service is complete: ", JSON.stringify(event));
                resolve(event);
            });

            // TODO: Reject when an error is encountered on the service.
        })

    }
}
