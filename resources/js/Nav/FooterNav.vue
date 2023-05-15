<template>
<nav>
    <ul class="flex gap-x-[20px] gap-y-[8px] flex-wrap leading-tight">
        <FooterNavItem 
            v-for="item in $page.props.nav.footer_nav" 
            :item="item" 
        />
    </ul>
</nav>
</template>

<script>
import FooterNavItem from '@/Nav/FooterNavItem.vue'

export default {
    components: { FooterNavItem },
};
</script>
