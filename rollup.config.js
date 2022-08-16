import resolve from "@rollup/plugin-node-resolve";
import commonJS from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
// import inject from "@rollup/plugin-inject";
import replace from "rollup-plugin-replace";
import copy from "rollup-plugin-copy";
// import pkg from './package.json';
import ignoreImport from 'rollup-plugin-ignore-import';

const extensions = [ ".mjs", ".js", ".ts", ".json" ];

export default {
    input: [ "./src/main.mjs"],
    external: [
        '../lib/quickjs-ffi.so',
        './quickjs-ffi.so',
        '../vendor/quickjs-zmq/quickjs-zmq.so',
        '../lib/quickjs-zmq.so',
        './quickjs-zmq.so'
    ],
    plugins: [
        // ignoreImport({
            // Ignore all .scss and .css file imports while building the bundle
            // include: ['**/*.so'],
            // Optional: replace body for ignored files. Default value is "export default undefined;"
            // body: 'export default undefined;'
        //   }),
        // Copy shared objects to final output dir.
        copy({
            targets: [
              { src: ['src/**/*.so'], dest: 'lib' }
            ]
          }),      
        // Allows node_modules resolution
        resolve({
            extensions,
            mainFields: ["module", "jsnext:main", "browser"],
            preferBuiltins: false
        }),
        // Replace the env with production.
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        // Compile Typescript
        typescript(),
        // Convert JSON files to TS modules for import
        json(),
        // Resolve CommonJS modules
        commonJS({ extensions }),
        // Transpile to ES5
        // babel({
        //     extensions,
        //     babelHelpers: "bundled"
        // }),
        // replace({
        //     'quickjs-ffi.so': './quickjs-ffi.so'
        // })
    ],
    output: {
        // "file": "build/index.js",
        "format": "esm",
        "dir": "build"
    }
}