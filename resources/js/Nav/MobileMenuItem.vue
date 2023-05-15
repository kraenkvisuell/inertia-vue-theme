<template>
    <li class="text-navi-xl leading-snug">
        <component 
            :is="item.url ? 'Link' : 'button'"
            :href="item.url" 
            class="block py-[8px]"
            :class="{
                'text-highlight-medium': item.is_current,
                'cursor-auto': !item.url,
            }"
            @click="item.url ? naviStore.closeMobileMenu() : naviStore.toggleMobileChildren(item.id)"
        >
            <span v-text="item.title" />
        </component>

        <MobileMenuChildren 
            v-if="item.children.length"
            v-show="naviStore.activeMobileChildren == item.id"
            :children="item.children"
        />
    </li>
</template>

<script>
import MobileMenuChildren from '@/Nav/MobileMenuChildren.vue'
import { Link } from '@inertiajs/vue3'
import { naviStore } from '@/Stores/navi'

export default {
    components: { Link, MobileMenuChildren },
    data() {
        return {
            naviStore: naviStore(),
        }
    },
    props: {
        item: Object,
    },
    mounted() {
        // console.log(this.raw(this.item));
    }
};
</script>
