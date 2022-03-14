import { interpret } from "xstate";
import { SimulatedClock } from 'xstate/lib/SimulatedClock'
import { runtimeMachine} from "./simpleStateMachine";
import {setTimeout, clearTimeout} from "os";

const testService = interpret(runtimeMachine, {
    clock: {
        setTimeout: setTimeout,
        clearTimeout: clearTimeout
    }
});

testService.start();