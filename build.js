const { build } = require("esbuild");
const postCssPlugin = require("@izquiratops/esbuild-postcss");
const postcssPresetEnv = require("postcss-preset-env");
const postcssExtend = require("postcss-extend");

build({
  entryPoints: ["./src/main.ts"],
  outdir: "./dist",
  bundle: true,
  watch: true,
  plugins: [
    postCssPlugin.default({
      plugins: [
        postcssPresetEnv({
          features: {
            "nesting-rules": true,
          },
        }),
        postcssExtend,
      ],
    }),
  ],
});
