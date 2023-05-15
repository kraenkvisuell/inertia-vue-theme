<template>
  <ul 
    class="
        z-40 leading-normal
        absolute left-[-15px] top-[17px] bg-white shadow p-[12px]
        transition-opacity duration-500
        opacity-0 group-hover:opacity-100
        pointer-events-none group-hover:pointer-events-auto
    "
>
    <li v-for="child in children">
        <Link 
            :href="child.url" 
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
import { Link } from '@inertiajs/vue3'

export default {
    components: { Link },
    props: {
        children: Array,
    },
    mounted() {
        // console.log(this.raw(this.children));
    }
};
</script>
