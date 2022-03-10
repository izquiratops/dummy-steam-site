const { build } = require("esbuild");
const postCssPlugin = require("@izquiratops/esbuild-postcss");
const postCssPresetEnv = require("postcss-preset-env");
const postCssMixins = require("postcss-mixins");
const postCssAutoprefixer = require("autoprefixer");

build({
  entryPoints: ["./src/main.ts"],
  outdir: "./dist",
  bundle: true,
  plugins: [
    postCssPlugin.default({
      plugins: [
        postCssMixins,
        postCssPresetEnv({
          features: {
            "nesting-rules": true,
          },
        }),
        postCssAutoprefixer,
      ],
    }),
  ],
});
