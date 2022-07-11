# QuickJS Typescript Template

This project is a template for creating javascript projects that can be compiled using the QuickJS javascript engine.  It uses the Rollup tool, along with several plugins, to enable the use of commonjs `require` syntax, as well as typescript projects.  You can use many pure javascript npm and browser modules as long as they don't rely on the NodeJS apis or networking / os / file events.

This repository also contains the `txikijs` framework which is offers platform abstraction for networking, file systems, and event loop, and more node-like features using `libuv`.  It includes many of the functions typically found in the `window` api for browsers, so many browser-side javascript libraries should work out-of-the-box as well.

If you're developing code that uses bundled libraries and you aren't yet ready to create QuickJS bindings, you can use the foreign function interface (ffi) provided by [js-ffi-cross](https://github.com/ffi-cross/js-ffi-cross).  From the documentation:

> js-ffi-cross is a Node.js addon for loading and calling dynamic libraries using pure JavaScript. It can be used to create bindings to native libraries without writing any C++ code.
> It also simplifies the augmentation of \[quickjs\] with C code as it takes care of handling the translation of types across JavaScript and C, which can add reams of boilerplate code to your otherwise simple C

## Project Structure

At the base directory of this project, you'll find a few different files used for configuring the build tools in this toolchain.  You can configure babel using the `babel.config.json` file.  Typescript configurations can be modified in the `tsconfig.json` file.  This system uses `rollup` to filter, combine, and process your project, and outputs the final javascript files into the `build` directory.

Node modules which do not rely on the NodeJS built in API's can be installed in the `node_modules` using the standard `npm install` method.  By default, rollup is configured to resolve the node dependencies and you can use many node and browser modules out-of-the-box.

Your typescript, javascript, and javascript modules can be put in the `src` folder with any heirarchy you want.  By default, rollup is configured to load the `main.ts` file and resolved dependencies from there, but you can modify that behavior in the `rollup.config.json` file.

If you want a more complete system with an event loop, tcp and udp ports, and access to a `window` object with basic browser shim, you can build `txikijs` located in the `txiki.js` folder.