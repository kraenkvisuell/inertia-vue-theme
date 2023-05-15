<template>
<div 
    class="
        fixed z-10
        w-full h-screen
        bg-white transition-[top] duration-500
        shadow
        pt-[80px]
    "
    :class="{
        'top-[calc(-100%+55px)]': !naviStore.mobileMenuIsOpen,
        'top-0': naviStore.mobileMenuIsOpen,
    }"
>
   <nav class="px-[40px]">
        <ul>
            <MobileMenuItem 
                v-for="item in $page.props.nav.main_nav" 
                :item="item" 
            />
        </ul>
   </nav>
</div>
</template>

<script>
import { naviStore } from '@/Stores/navi'
import MobileMenuItem from '@/Nav/MobileMenuItem.vue'

export default {
    components: { 
        MobileMenuItem,
    },
    data() {
        return {
            naviStore: naviStore(),
        }
    },
};
</script>
