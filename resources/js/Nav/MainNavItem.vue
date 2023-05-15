<template>
    <li class="group relative">
        <component 
            :is="item.url ? 'Link' : 'button'"
            :href="item.url" 
            :class="{
                'text-highlight-medium': item.is_current || item.is_parent,
                'cursor-auto': !item.url,
            }"
        >
            <span v-text="item.title" />
        </component>

        <MainNavChildren 
            v-if="item.children.length"
            :children="item.children"
        />
    </li>
</template>

<script>
import MainNavChildren from '@/Nav/MainNavChildren.vue'
import { Link } from '@inertiajs/vue3'

export default {
    components: { Link, MainNavChildren },
    props: {
        item: Object,
    },
    mounted() {
        // console.log(this.raw(this.item))
    }
};
</script>
