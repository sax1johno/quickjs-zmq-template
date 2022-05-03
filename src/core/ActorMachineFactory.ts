import {createMachine, assign, spawn, send, forwardTo} from 'xstate';

// Create a new actor machine that spawns the given machine
export default function (machine) {
    return  createMachine(
        {
            "id": "Actor Machine",
            "initial": "initializing",
            "context": {
                "error": null
            },
            "states": {
              "initializing": {
                "on": {
                  "_.start": {
                    "target": "running",
                    "actions": ["log"]
                  }
                }
              },
              "running": {
                invoke: {
                    "id": machine.id,
                    "src": machine,
                    "onDone": {
                        "target": "stopped",
                        actions: assign({ result: (context, event) => event.data })              
                    },
                    "onError": {
                        "target": "errored",
                        "actions": assign({ error: (context, event) => event.data })
                    }
                },
                "on": {
                  "_.pause": {
                    "target": "paused",
                    "actions": ["log"]
                  },
                  "_.stop": {
                    "target": "stopped",
                    "actions": ["log"]
                  },
                  "*": {
                    actions: [
                        forwardTo(machine.id)
                    ]
                  }
                }
              },
              "paused": {
                "on": {
                  "_.start": {
                    "target": "running",
                    "actions": [
                        "log"
                    ]
                  },
                  "_.stop": {
                    "target": "stopped",
                    "actions": ["log"]
                  },
                }
              },
              "stopped": {
                  "entry": [
                      "log"
                  ],
                "type": "final"
              },
              "errored": {
                  "entry": [
                      "log"
                  ],
                  "type": "final"
              }
            }
          }, {
              actions: {
                  sendToActor: (context, event) => {
                    console.log("sending ", JSON.stringify(event.type), " to ", JSON.stringify(machine.id));
                    send(event.type, { to: machine.id });
                  },
                  log: (context, event) => {
                    console.log("log: ", JSON.stringify({...context, ...event}));
                    console.log('time:', Date.now());
                  },
                  matchedWildcard: (context, event) => {
                    console.log("Matched wildcard: ", JSON.stringify({...context, ...event}));
                  },
                  spawnMachine: (context, event) => {
                      assign({
                          actorRef: () => spawn(machine)
                      });
                  }
              }
          }  
    );
}
