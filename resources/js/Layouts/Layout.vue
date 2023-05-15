<template>
    <div class="flex flex-col w-full min-h-full">
        <Head :title="$page.props.globals.website.browser_title" />

        <Header class="z-30 fixed top-0 left-0 w-full" />

        <transition name="page" mode="out-in" appear>
            
            <main :key="$page.url" class="
                w-full min-h-full z-10
                px-[16px] sm:px-[26px] md:px-[38px]
                pt-[120px] md:pt-[190px]
                pb-[120px] md:pb-[190px]
            ">
                <slot />
            
            </main>
        </transition>

        <Footer class="z-20 absolute bottom-0 left-0 w-full" />
    </div>
</template>

<script>
import { Head } from '@inertiajs/vue3'
import Footer from '@/Parts/Footer.vue'
import Header from '@/Parts/Header.vue'

export default {
    components: {
        Footer,
        Head, 
        Header, 
    },
    mounted() {
        
    }
};
</script>

<style>
    .page-enter-active,
    .page-leave-active {
        transition: all .5s ease;
    }

    .page-enter-from,
    .page-leave-to {
        opacity: 0;
    }

</style>
