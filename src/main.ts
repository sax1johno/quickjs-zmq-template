import { interpret } from "xstate";
import { runtimeMachine} from "./simpleStateMachine";

const testService = interpret(runtimeMachine);

testService.start();