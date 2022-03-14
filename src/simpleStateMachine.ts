import { createMachine, assign } from "xstate";

export const runtimeMachine = createMachine(
  {
    id: "Hello World",
    initial: "ping",
    states: {
      ping: {
        after: {
          1000: {
            target: "pong",
          },
        },
      },
      pong: {
        after: {
          1000: {
            target: "ping",
          },
        },
      },
    },
  },
  {
    actions: {
      log: (context, event) => {
        console.log(event);
      },
    },
  }
);
