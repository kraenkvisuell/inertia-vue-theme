import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { createPinia } from 'pinia'
const pinia = createPinia()

createServer((page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: name => {
        const pages = import.meta.glob('./Blueprints/**/*.vue', { eager: true })
        return pages[`./Blueprints/${name}.vue`]
    },
    
    setup({ App, props, plugin }) {
        const VueApp = createSSRApp({ render: () => h(App, props) });

        VueApp.use(pinia).use(plugin).mount(el);
    },
}));
