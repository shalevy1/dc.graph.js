import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
    input: "node_modules/yoga-layout/dist/src/index.js",
    output: {
        name: "yogaLayout",
        file: "yoga-layout.js",
        format: "es"
    },
    plugins: [
        nodeResolve({
            jsnext: true,
            main: true
        }),
        commonjs()
    ]
};
