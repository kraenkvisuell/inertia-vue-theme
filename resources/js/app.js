function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setVH();

window.addEventListener('resize', setVH);

import { createSSRApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { createPinia } from 'pinia'
import helpers from '@/Mixins/helpers'
const pinia = createPinia()

import _ from 'lodash'
window._ = _

createInertiaApp({
    progress: {
        color: '#FFB000',
    },
    title: (title) => `${title}`,
    resolve: name => {
        const pages = import.meta.glob('./Blueprints/*.vue', { eager: true })
        return pages[`./Blueprints/${name}.vue`]
    },

    setup({ el, App, props, plugin }) {
        const VueApp = createSSRApp({ render: () => h(App, props) });
        VueApp
            .use(pinia)
            .use(plugin)
            .mixin(helpers)
            .mount(el);
    },
});
