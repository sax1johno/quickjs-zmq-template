import { createMachine, assign } from 'xstate';

interface Context {
  retries: number;
}

export const fetchMachine = createMachine<Context>({
  id: 'fetch',
  initial: 'idle',
  context: {
    retries: 0
  },
  states: {
    idle: {
    entry: ["log"],
      on: {
        FETCH: {
            "target": 'loading',
            actions: [ "log" ]
        }
      }
    },
    loading: {
      entry: ["log"],
      on: {
        RESOLVE: {
            "target": 'success',
            "actions": [ "log" ]
        },
        REJECT: {
            "target": 'failure',
            "actions": ["log"]
        }
      }
    },
    success: {
      entry: ["log"],
      type: 'final'
    },
    failure: {
      entry: ["log"],
      on: {
        RETRY: {
          target: 'loading',
          actions: [
              assign({retries: (context, event) => context.retries + 1}),
              "log"
              ]
        }
      }
    }
  }
},   
{
    actions: {
      log: (context, event) => {
        console.log(JSON.stringify({...context, ...event}));
        console.log('time:', Date.now());
      },
    },
  }
);