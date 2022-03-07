const { build } = require('esbuild');
const postCssPlugin = require('@izquiratops/esbuild-postcss');
const postcssModules = require('postcss-modules');
const postcssPresetEnv = require('postcss-preset-env');

build({
    entryPoints: ['src/main.ts'],
    outdir: 'dist',
    bundle: true,
    minify: true,
    plugins: [
        postCssPlugin.default({
            plugins: [postcssModules, postcssPresetEnv]
        })
    ]
})