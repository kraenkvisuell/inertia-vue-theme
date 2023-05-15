<template>
<div class="
    w-[36px] h-[36px] md:w-[50px] md:h-[50px]
">
    <Link :href="homeUrl" @click="naviStore.closeMobileMenu()">
        <img src="/img/smiley.png" class="w-full" />
    </Link>
</div>
</template>

<script>
import { naviStore } from '@/Stores/navi'
import { Link } from '@inertiajs/vue3'

export default {
    components: { Link },
    data() {
        return {
            naviStore: naviStore(),
        }
    },
    computed: {
        homeUrl() {
            return this.$page.props.activeLocale != 'de' 
                ? '/'+this.$page.props.activeLocale
                : '/'
        }
    }
};
</script>
