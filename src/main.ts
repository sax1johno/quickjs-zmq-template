// Example of how to use the state machine actor system.
// A runtime can determine how to load state machine Actors, when messages get passed from one machine
// to another, and how events are triggered / sent to a state machine Actor.

// import { runtimeMachine} from "./simpleStateMachine";
import { fetchMachine } from "./fetchMachine";
import Actor from "./core/Actor";
// Add this import for quickjs-compatible build
import * as os from "os";
import * as std from "std"


var machines = [];
const fetcher = new Actor(fetchMachine);
machines.push(fetcher);
var subscribers = {
    "fetch": machines.indexOf(fetcher)
}

/**
 * This function can only be called once per running process.  This will run the runtime, 
 * initialize the actors, and start their interpreters.  Note that this will NOT start interpreting
 * the actual state machines - to do this, they'll need to receive a message of _.start
 * @param {Machine[]} machines An array of state machines actors to run.
 * @returns 
 */
function run(machines) {
    // First, start the machines.
    return new Promise((resolve, reject) => {
        var machinePromises = [];
        for (var machine of machines) {
            machinePromises.push(machine.start());
        }

        var line;

        // Listen on STDIN for events
        os.setReadHandler(std.in, () => {
            line = std.in.getline();
        
            if (!line) {
                std.out.printf("\n");
                // If input is stopped then end the program.
                // Status is 0 (success)
                resolve(0);
                // os.setReadHandler(std.in, null);
            }
        
            // let string = String.fromCharCode.apply(null, readBuf);
            console.log(line);
            // fetchService.send(line);
            try {
                var data = JSON.parse(line);
                console.log(JSON.stringify(data));
                // if (data.topic) {
                //     const machineIndex = subscribers[data.topic];
                //     machines[machineIndex].service.send(data);
                // } else {
                for (var machine of machines) {
                    console.log(JSON.stringify(machine));
                    machine.service.send(data);
                }
                // }
            } catch (e) {
                console.log("Error Encountered:", JSON.stringify(e.message));
                reject(std.Error.EINVAL);
            }
        });
        
        // Handle input and signals
        
        // Handle OS signals:
        os.signal(os.SIGINT, reject);
        // os.signal(os.SIGABRT, exitProgram);
        // os.signal(os.SIGTERM, exitProgram);
        Promise.all(machinePromises).then((values) => {
            // All machines are done, so end the program.
            for (var i of values) {
                if (i != 0) {
                    resolve(i);
                    return;
                }
            }

            resolve(0);
        }).catch((values) => {
            reject(-1);
        })
    })
}

run(machines).then((value) => {
    return value;
}, (errorCode) => {
    return errorCode
}).finally((exitCode = 0) => {
    console.log("Should be exiting");
    std.exit(exitCode);
});
