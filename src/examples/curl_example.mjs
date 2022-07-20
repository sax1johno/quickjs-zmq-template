import {get as getUrl} from "./curl.mjs"

var response = getUrl("https://jsonplaceholder.typicode.com/todos");

// console.log(response);

var parsedResponse = JSON.parse(response);

for (var i = 0; i < parsedResponse.length; i++) {
    console.log(JSON.stringify(parsedResponse[i]));
}