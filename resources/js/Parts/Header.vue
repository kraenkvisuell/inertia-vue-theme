<template>
<div
    class="
        flex gap-[40px] items-center 
        md:bg-white md:shadow
        px-[15px] md:px-[20px] py-[10px] md:py-[15px]
    "
>
    <div class="flex-none z-50">
        <HeaderLogo />
    </div>
    
    <div class="hidden md:block">
        <MainNav />
    </div>

    <MobileMenu />
</div>
</template>

<script>
import HeaderLogo from '@/Parts/HeaderLogo.vue'
import MainNav from '@/Nav/MainNav.vue'
import MobileMenu from '@/Nav/MobileMenu.vue'

export default {
    components: { 
        HeaderLogo, 
        MainNav, 
        MobileMenu,
    },
};
</script>
