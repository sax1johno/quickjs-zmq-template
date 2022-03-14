import resolve from "@rollup/plugin-node-resolve";
import commonJS from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
// import inject from "@rollup/plugin-inject";
import replace from "rollup-plugin-replace";
// import pkg from './package.json';

const extensions = [ ".mjs", ".js", ".ts", ".json" ];

export default {
    input: [ "./src/main.ts"],
    external: [],
    plugins: [
        // Allows node_modules resolution
        resolve({
            extensions,
            mainFields: ["module", "jsnext:main", "browser"],
            preferBuiltins: false
        }),
        // Replace the env with production.
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        // Compile Typescript
        typescript(),
        // Convert JSON files to TS modules for import
        json(),
        // Resolve CommonJS modules
        commonJS({ extensions }),
        // Transpile to ES5
        babel({
            extensions,
            babelHelpers: "bundled"
        })
    ],
    output: {
        // "file": "build/index.js",
        "format": "esm",
        "dir": "build"
    }
}