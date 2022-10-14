const path = require("path");
const mix = require("laravel-mix");

mix
    .js("resources/js/app.js", "public/js")
    .vue({ version: 3 })
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
        stats: {
            children: true,
        },
    });

if (mix.inProduction()) {
    mix.version();
}
