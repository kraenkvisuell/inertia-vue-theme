<template>
    <div 
        class="
            font-copy text-white text-copy-base
            flex flex-col w-full
        "
    >
        <Head :title="$page.props.globals.website.browser_title" />

        

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
import { Head } from '@inertiajs/vue3'
import { Link } from '@inertiajs/vue3'
import eventBus from '@/eventBus'

export default {
    data() {
        return {
            menuIsVisible: false,
        }
    },
    components: {
    Head,
    Link
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
