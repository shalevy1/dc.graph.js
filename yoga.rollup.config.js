import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
    input: "yoga-wrapper-entry.js",
    output: {
        name: "yogaWrapper",
        file: "yoga-layout.js",
        format: "es",
        inlineDynamicImports: true
    },
    plugins: [
        nodeResolve({
            jsnext: true,
            main: true
        }),
        commonjs()
    ]
};
