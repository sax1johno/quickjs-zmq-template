import { interpret } from "xstate";
import { SimulatedClock } from 'xstate/lib/SimulatedClock'
import { runtimeMachine} from "./simpleStateMachine";
import { fetchMachine } from "./fetchMachine";
// Add this import for quickjs-compatible build
import * as os from "os";
import * as std from "std"

/*
// Use the setTimeout and clearTimeout from the OS package since it's not included.
const testService = interpret(runtimeMachine, {
    clock: {
        setTimeout: os.setTimeout,
        clearTimeout: os.clearTimeout
    }
});

testService.start();

const fetchService = interpret(fetchMachine, {
    clock: {
        setTimeout: os.setTimeout,
        clearTimeout: os.clearTimeout
    }
});

fetchService.start();

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
    fetchService.send(line);
    console.log(JSON.stringify(fetchService.state.toJSON()));
    // std.gc();
});

// Handle OS signals:

var exitProgram = () => {
    console.log("Should be exiting");
    std.exit(0);
}

os.signal(os.SIGINT, exitProgram);
os.signal(os.SIGABRT, exitProgram);
os.signal(os.SIGTERM, exitProgram);

// var worker = new os.Worker("./util/listenserver");

// worker.onmessage = function(e) {
//     var msg = e.data;

//     fetchService.send(msg.payload);
// }
*/