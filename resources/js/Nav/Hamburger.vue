<template>
<button 
    class="
        absolute right-0 top-0 z-20
        w-[55px] h-[55px]
    "
    @click="naviStore.toggleMobileMenu()"
>
    <div class="absolute right-[15px] top-[15px]">
    <HamburgerLine
            :class="{
                'rotate-0 w-[30px] top-[0] right-[0]': !naviStore.mobileMenuIsOpen,
                'rotate-[-45deg] origin-top-right w-[35px] top-[0] right-[2px]': naviStore.mobileMenuIsOpen
            }"
        />

        <HamburgerLine
            class="top-[11px] w-[30px] right-[0]"
            :class="{
                'opacity-100': !naviStore.mobileMenuIsOpen,
                'opacity-0': naviStore.mobileMenuIsOpen
            }"
        />

        <HamburgerLine
            :class="{
                'rotate-0 w-[30px] top-[22px] right-[0]': !naviStore.mobileMenuIsOpen,
                'rotate-[45deg] origin-bottom-right w-[35px] top-[24px] right-[2px]': naviStore.mobileMenuIsOpen
            }"
        />
    </div>
</button>
</template>

<script>
import { naviStore } from '@/Stores/navi'
import HamburgerLine from '@/Nav/HamburgerLine.vue'

export default {
    components: { HamburgerLine },
    data() {
        return {
            naviStore: naviStore(),
        }
    },
};
</script>
