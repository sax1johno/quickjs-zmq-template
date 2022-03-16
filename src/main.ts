import { interpret } from "xstate";
import { SimulatedClock } from 'xstate/lib/SimulatedClock'
import { runtimeMachine} from "./simpleStateMachine";
import {setTimeout, clearTimeout} from "os";

// Use the setTimeout and clearTimeout from the OS package since it's not included.
const testService = interpret(runtimeMachine, {
    clock: {
        setTimeout: setTimeout,
        clearTimeout: clearTimeout
    }
});

testService.start();
