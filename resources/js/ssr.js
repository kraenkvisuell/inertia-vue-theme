import { createSSRApp, h } from "vue";
import { renderToString } from "@vue/server-renderer";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import createServer from "@inertiajs/server";
import Layout from "@/Layouts/Layout.vue";

createServer((page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: name => {
        const page = require(`./Blueprints/${name}`).default;
        page.layout = page.layout || Layout;
        return page;
    },
    setup({ app, props, plugin }) {
      return createSSRApp({
        render: () => h(app, props),
      }).use(plugin);
    },
}));
