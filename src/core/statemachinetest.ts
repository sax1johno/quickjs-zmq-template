import { createMachine, assign } from "xstate";

interface Context {
  retries: number;
  config: Object;
}

export const runtimeMachine = createMachine<Context>({
  id: "runtime",
  initial: "starting",
  context: {
    retries: 0,
    config: {}
  },
  states: {
    starting: {
      entry: ['beforeStarting'],
      exit: ['afterStarting'],
      on: {
        'control.runtime.configure': "configuring",
        'control.runtime.failure': "failed",
      },
    },
    configuring: {
      entry: ['beforeConfiguring'],
      exit: ['afterConfiguring'],
      on: {
        'control.runtime.initialize': "initializing",
        'control.runtime.failure': "failed",
      },
    },
    initializing: {
      entry: ['beforeInitializing'],
      exit: ['afterInitializing'],
      on: {
        'control.runtime.run': "running",
        'control.runtime.failure': "failed",
      },
    },
    running: {
      entry: ['enterRunning'],
      exit: ['leaveRunning'],
      on: {
        'control.runtime.pause': "paused",
        'control.runtime.stop': "stopped",
        'control.runtime.restart': "starting",
        'control.runtime.reload': "configuring",
        'control.runtime.kill': "tearingDown",
        'control.runtime.failure': "failed",
      },
    },
    paused: {
      entry: ['enterPaused'],
      exit: ['leavePaused'],
      on: {
        'control.runtime.resume': "running",
        'control.runtime.stop': "stopped",
        'control.runtime.kill': "tearingDown",
        'control.runtime.restart': "starting",
        'control.runtime.reload': "configuring",
        'control.runtime.failure': "failed",
      },
    },
    stopped: {
      entry: ['enterStopped'],
      exit: ['leaveStopped'],
      on: {
        'control.runtime.resume': "running",
        'control.runtime.restart': "starting",
        'control.runtime.reload': "configuring",
        'control.runtime.kill': "tearingDown",
        'control.runtime.failure': "failed",
      },
    },
    tearingDown: {
      entry: ['beforeTearingDown'],
      exit: ['afterTearingDown'],
      on: {
        "": {
          target: "destroying",
        },
      },
    },
    destroying: {
      entry: ['beforeDestroying'],
      exit: ['afterDestroying'],
      on: {
        "": {
          target: "destroyed",
        },
      },
    },
    failed: {
      entry: ['enterFailed'],
      exit: ['exitFailed'],
      on: {
        'control.runtime.kill': {
          target: "tearingDown"
        },
        'control.runtime.retry': {
          target: "starting",
          actions: assign({
            retries: (ctx, event) => {
              return ctx.retries + 1;
            }
          }),
        },
      },
    },
    destroyed: {
      type: "final",
    },
  },
}, {
  actions: {
    beforeStarting: () => {},
    afterStarting: () => {},
    beforeConfiguring: () => {},
    afterConfiguring: () => {},
    beforeInitializing: () => {},
    afterInitializing: () => {},
    enterRunning: () => {},
    leaveRunning: () => {},
    enterPaused: () => {},
    leavePaused: () => {},
    enterStopped: () => {},
    leaveStopped: () => {},
    beforeTearingDown: () => {},
    afterTearingDown: () => {},
    beforeDestroying: () => {},
    afterDestroying: () => {},
    enterFailed: () => {},
    exitFailed: () => {},
  },
  guards: {},
  activities: {},
  delays: {},
  services: {}
}
);
