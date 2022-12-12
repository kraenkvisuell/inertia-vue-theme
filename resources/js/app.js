import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import Layout from "@/Layouts/Layout.vue";
import { InertiaProgress } from "@inertiajs/progress";

InertiaProgress.init({
    color: '#a2efd6',
});

createInertiaApp({
    title: (title) => `${title}`,
    resolve: name => {
        const page = require(`./Blueprints/${name}`).default;
        page.layout = page.layout || Layout;
        return page;
    },
    
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el);
    },
});
