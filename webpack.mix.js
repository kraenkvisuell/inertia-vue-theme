const fs = require('fs');
const homedir = require('os').homedir();
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
    })
    .options({ 
        processCssUrls: false
    });
