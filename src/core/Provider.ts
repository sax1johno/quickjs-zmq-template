// export function DefaultProvider(eventBus) {
//     eventBus.ping.on(() => {
//         console.log("ping ping ping");
//     })
//   }

export abstract class Provider {
    private _runtime;
    constructor(runtime) {
        this._runtime = runtime;
    }

    get EventBus() {
        return this._runtime._eventBus;
    }
}