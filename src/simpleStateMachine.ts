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
            actions: ["log"]
          },
        },
      },
      pong: {
        after: {
          1000: {
            target: "ping",
            actions: ["log"]
          },
        },
      },
    },
  },
  {
    actions: {
      log: (context, event) => {
        console.log(JSON.stringify(event));
      },
    },
  }
);
