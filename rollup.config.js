import resolve from "rollup-plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: "lib/index.cjs.js",
                format: "cjs",
            },
            {
                file: "lib/index.esm.js",
                format: "esm",
            },
        ],
        external: ["react"],
        plugins: [
            resolve(),
            commonjs({
                include: /node_modules/,
            }),
            typescript(),
            terser(),
        ],
    },
    {
        input: "src/antd-utils/index.ts",
        output: [
            {
                file: "lib/antd-utils.esm.js",
                format: "esm",
            },
        ],
        external: ['react', 'react-dom', 'antd'],
        plugins: [
            resolve(),
            commonjs({
                include: /node_modules/,
            }),
            typescript(),
            terser(),
        ],
    }
];
