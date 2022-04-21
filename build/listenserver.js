/**
 * A worker that listens to standard input and sends messags with the input
 * back to the process that invoked the worker.
 */
import * as os from "os";
import * as std from "std"

var parent = os.Worker.parent;

function handle_msg(e) {
    // Handle a message coming from the parent.
    // var event = e.data;

    // switch (event.type) {
    //     case "abort": 
    // }
}

var file = std.fdopen(std.in, "r");
var line;

while (line = file.getline()) {
    parent.postMessage({"payload": line});
}