<template>
  <ul 
    class="
        leading-normal
        pb-[20px] text-navi-lg
    "
>
    <li v-for="child in children">
        <Link 
            :href="child.url" 
            @click="naviStore.closeMobileMenu()"
            class="whitespace-nowrap"
            :class="{
                'text-highlight-medium': child.is_current
            }"
        >
            <span v-text="child.title" />
        </Link>
    </li>
</ul>
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
    props: {
        children: Array,
    },
    mounted() {
        // console.log(this.raw(this.children));
    }
};
</script>
