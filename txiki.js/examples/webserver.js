// const net = require('net');
import { getopts } from '@tjs/std';
import { addr } from './utils.js';

async function handleConnection(conn) {
    console.log(`Accepted connection! ${addr(conn.localAddress)} <-> ${addr(conn.remoteAddress)}`);

    const buf = new Uint8Array(65536);
    while (true) {
        const nread = await conn.read(buf);
        if (!nread) {
            console.log('connection closed!');
            break;
        }

        const data = buf.subarray(0, nread);
        const stringData = new TextDecoder().decode(data);
        console.log(stringData);
        const [requestHeader, ...bodyContent] = stringData.split('\r\n\r\n');

        const [firstLine, ...otherLines] = requestHeader.split('\n');
        const [method, path, httpVersion] = firstLine.trim().split(' ');
        const headers = Object.fromEntries(otherLines.filter(_=>_)
            .map(line=>line.split(':').map(part=>part.trim()))
            .map(([name, ...rest]) => [name, rest.join(' ')]));

        var body;
        try {
            body = JSON.parse(bodyContent);
        } catch(err){/* ignore */}


        const request = {
            method, 
            path,
            httpVersion,
            headers,
            body
        };
        console.log(request)

        await conn.write(buf.subarray(0, nread));
    }
}

(async () => {
    const options = getopts(tjs.args.slice(2), {
        alias: {
            listen: 'l',
            port: 'p'
        },
        default: {
            listen: 'localhost',
            port: 8081
        }
    });

    const l = await tjs.listen('tcp', options.listen, options.port);

    console.log(`Listening on ${addr(l.localAddress)}`); 

    for await (let conn of l) {
        handleConnection(conn);
        conn = undefined;
    }
})();


// const server = net.createServer(socket => {
//     socket.on('data',data=>{
//         const [requestHeader, ...bodyContent] = data.toString().split('\r\n\r\n');

//         const [firstLine, ...otherLines] = requestHeader.split('\n');
//         const [method, path, httpVersion] = firstLine.trim().split(' ');
//         const headers = Object.fromEntries(otherLines.filter(_=>_)
//             .map(line=>line.split(':').map(part=>part.trim()))
//             .map(([name, ...rest]) => [name, rest.join(' ')]));

//         var body;
//         try {
//             body = JSON.parse(bodyContent);
//         } catch(err){/* ignore */}


//         const request = {
//             method, 
//             path,
//             httpVersion,
//             headers,
//             body
//         };
//         console.log(request)
//         socket.write(`HTTP/1.1 200 OK\n\nhallo ${request.body.name}`)
//         socket.end((err)=>{console.log(err)})
//     });
// });

// server.listen(3000);
