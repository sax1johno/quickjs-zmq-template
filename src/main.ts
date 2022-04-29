import { interpret } from "xstate";
import { SimulatedClock } from 'xstate/lib/SimulatedClock'
import { actorFactory } from "./ActorMachine";
import { runtimeMachine} from "./simpleStateMachine";
import { fetchMachine } from "./fetchMachine";
// Add this import for quickjs-compatible build
import * as os from "os";
import * as std from "std"

// Use the setTimeout and clearTimeout from the OS package since it's not included.
// const testService = interpret(actorFactory(runtimeMachine), {
//     clock: {
//         setTimeout: os.setTimeout,
//         clearTimeout: os.clearTimeout
//     }
// });

// testService.start();

const fetchService = interpret(actorFactory(fetchMachine), {
    clock: {
        setTimeout: os.setTimeout,
        clearTimeout: os.clearTimeout
    }
});


fetchService.start();

// Handle input and signals

// Handle OS signals:
os.signal(os.SIGINT, exitProgram);
os.signal(os.SIGABRT, exitProgram);
os.signal(os.SIGTERM, exitProgram);
os.signal(os.SIGFPE, exitProgram);

var exitProgram = () => {
    console.log("Should be exiting");
    std.exit(0);
}

fetchService.onTransition((state) => {
    // console.log(JSON.stringify(state));
    const { actorRef } = state.context;
    console.log("Parent: ", JSON.stringify(state));
    console.log("actorRef: ", JSON.stringify(actorRef?.getSnapshot()));
    // => State {
    //   value: ...,
    //   context: ...
    // }
  });

var line;

// Listen on STDIN for events
os.setReadHandler(std.in, () => {

    line = std.in.getline();

    if (!line) {
        std.out.printf("\n");
        // os.setReadHandler(std.in, null);
    }

    // let string = String.fromCharCode.apply(null, readBuf);
    console.log(line);
    // fetchService.send(line);
    fetchService.send(line)
    // console.log(JSON.stringify(fetchService.state.toJSON()));
      
    // std.gc();
});