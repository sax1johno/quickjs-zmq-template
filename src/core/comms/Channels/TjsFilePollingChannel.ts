// @ts-nocheck
// import { readFileSync, writeFileSync } from 'fs'
// import { loadFile, open  } from '@tjs/std';
// import { setInterval } from "../../../../vendor/qjs-ext-lib/src/timers.js";
import { GenericChannel } from 'ts-event-bus';
// import { createClient } from "redis";

// const client = createClient();

type FileData = {
    _id: number;
    message: any;
}[]

export class FilePollingChannel extends GenericChannel {

    private _id = Date.now()

    constructor(private _filename: string) {
        super(8000)
        console.log(`id = ${this._id}`);
        this._connected()
        // this._emptyFile()
        setInterval(async () => {
            // console.log("Attempting to read file contents");
            const fileData = await this._read()
            if (!fileData) return
            // console.log(`fileData = ${JSON.stringify(fileData)}`);
            var message;
            var messages = fileData.filter(d => d._id !== this._id);
            if (messages.length > 0) {
                while (message = messages.pop()) {
                    // console.log(`Message = ${JSON.stringify(message)}`);
                    this._messageReceived(message.message)                
                }
                this._cleanFile(JSON.stringify(fileData.filter(d => d._id == this._id)));

            }
        }, 1000)
    }

    private _cleanFile(message: string): void {
        writeFileSync(this._filename, message)
    }


    private _emptyFile(): void {
        writeFileSync(this._filename, JSON.stringify([]))
    }

    private async _read(): FileData | void {
        try {
            // console.log("Attempting to read file");
            var rawOutput = await tjs.readFile(this._filename);
            var stringOutput = new TextDecoder().decode(rawOutput);
            // console.log(`Output is: ${stringOutput}`);
            return JSON.parse(stringOutput) as any as FileData
        } catch (err) {
            console.log(`There was an error reading file: ${err}`);
            console.log(JSON.stringify(err));
            this._error(err)
        }
    }

    public async send(message: any) {
        console.log("In send");
        const data = await this._read()
        console.log(data);
        if (!data) return
        data.push({
            _id: this._id,
            message
        })
        console.log(`In send, ${JSON.stringify(data)}`);
        await this._emptyFile();
        await writeFileSync(this._filename, JSON.stringify(data))
        console.log("wrote file");
    }
}

async function writeFileSync(filename:string, message:string=JSON.stringify([])) {
    console.log("In writeFileSync");
    var file = await tjs.open(filename, "w");
    // var messageBuffer = Uint8Array.from(message, x => x.charCodeAt(0));
    console.log(`Message to write: ${message}`);
    var messageBuffer = new TextEncoder().encode(message);
    // console.log(messageBuffer);
    console.log(message);
    file.write(messageBuffer);
    // file.sync();
    file.close();
}
