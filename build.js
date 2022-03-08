const {build} = require('esbuild');
const postCssPlugin = require('@izquiratops/esbuild-postcss');
const postcssPresetEnv = require('postcss-preset-env');
const postcssExtend = require('postcss-extend');

build({
    entryPoints: ['./src/main.ts'],
    outdir: './dist',
    bundle: true,
    sourcemap: true,
    plugins: [
        postCssPlugin.default({
            plugins: [
                postcssExtend,
                postcssPresetEnv({
                    features: {
                        'nesting-rules': true
                    }
                })
            ]
        })
    ]
})