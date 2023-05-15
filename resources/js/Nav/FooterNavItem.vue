<template>
    <li class="relative">
        <Link 
            :href="item.url" 
            :class="{
                'text-highlight-medium': item.is_current
            }"
        >
            <span v-text="item.title" />
        </Link>
    </li>
</template>

<script>
import { Link } from '@inertiajs/vue3'

export default {
    components: { Link },
    props: {
        item: Object,
    },
    mounted() {
        // console.log(this.raw(this.item));
    }
};
</script>
