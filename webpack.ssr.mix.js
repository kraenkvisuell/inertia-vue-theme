const path = require("path");
const mix = require("laravel-mix");
const webpackNodeExternals = require("webpack-node-externals");

mix
    .options({ manifest: false })
    .js("resources/js/ssr.js", "public/js")
    .vue({ version: 3, options: { optimizeSSR: true } })
    .postCss("resources/css/app.css", "public/css", [
        require("postcss-import"),
        require("tailwindcss/nesting"),
        require("tailwindcss"),
    ])
    .webpackConfig({
				resolve: {
            alias: {
                "@": path.resolve(__dirname, "resources/js/")
            }
        },
        target: "node",
        externals: [webpackNodeExternals()],
    });
