<template>
    <div 
        class="
            font-copy text-white
            flex flex-col w-full h-full
        "
    >
        <Head :title="$page.props.globals.website.browser_title" />

        <GradientVideo />

        <MegaMenu />

        <Link 
            href="/"
            class="
                absolute
                z-20 top-[12px] left-[12px] md:top-[38px] md:left-[38px]
                transform-opacity duration-500
            " 
            :class="{
                'opacity-100': !menuIsVisible,
                'opacity-20': menuIsVisible
            }" 
        >
            <img src="/img/logo.svg" class="w-[150px] md:w-[242px]" />
        </Link>
        

        <transition name="page" mode="out-in" appear>
            <main :key="$page.url" 
                class="
                    page w-full z-10
                    px-[16px] sm:px-[26px] md:px-[38px]
                    pt-[120px] md:pt-[190px]
                    transform-opacity duration-500
                "
                :class="{
                    'opacity-100': !menuIsVisible,
                    'opacity-0': menuIsVisible
                }" 
            >
                <slot />
            </main>
        </transition>
    </div>
</template>

<script>
import { Head } from '@inertiajs/inertia-vue3'
import { Link } from '@inertiajs/inertia-vue3'
import eventBus from '@/eventBus'

import MegaMenu from '@/Nav/MegaMenu.vue'
import GradientVideo from '@/Parts/GradientVideo.vue'

export default {
    data() {
        return {
            menuIsVisible: false,
        }
    },
    components: {
    Head,
    Link,
    MegaMenu,
    GradientVideo
},
    mounted() {
        eventBus.$on('menu-toggled', (menuIsVisible) => {
            this.menuIsVisible = menuIsVisible
        })
    }
};
</script>

<style>
    .page-enter-active,
    .page-leave-active {
        transition: opacity 0.5s ease;
    }

    .page-enter-from,
    .page-leave-to {
        opacity: 0;
    }

</style>
