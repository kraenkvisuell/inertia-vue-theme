<template>
<nav>
    <ul class="
        flex gap-x-[20px] gap-y-[8px] flex-wrap
        font-navi text-medium text-navi-base leading-tight
    ">
        <MainNavItem 
            v-for="item in $page.props.nav.main_nav" 
            :item="item" 
        />
    </ul>
</nav>
</template>

<script>
import MainNavItem from '@/Nav/MainNavItem.vue'

export default {
    components: { MainNavItem },
};
</script>
