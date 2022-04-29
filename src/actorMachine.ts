import {createMachine, assign, spawn, send} from 'xstate';

// Create a new actor machine that spawns the given machine
export const actorFactory = (machine) =>  {
    return  createMachine(
        {
            "id": "Actor Machine",
            "initial": "initializing",
            "context": {
                "actorRef": null
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
                    "id": "actor",
                    "src": machine
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
                        "sendToActor",
                        // "log"
                        "matchedWildcard"
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
              }
            }
          }, {
              actions: {
                  sendToActor: (context, event) => {
                      console.log("sending ", JSON.stringify(event), " to ", JSON.stringify("actor"));
                    send(event, { to: "actor" })                       
                  },
                  log: (context, event) => {
                    console.log("log: ", JSON.stringify({...context, ...event}));
                    console.log('time:', Date.now());
                  },
                  matchedWildcard: (context, event) => {
                    console.log("Matched wildcard: ", JSON.stringify({...context, ...event}));
                  }
              }
          }  
    );
}
