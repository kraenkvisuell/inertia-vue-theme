<template>
    <nav class="bg-slate-200 p-2">
        <ul class="flex gap-4 flex-wrap">
            <li
                v-for="item in this.$page.props.mainNav"
            >
                <Link 
                    :href="item.url" 
                    :class="{
                        'underline': !item.is_current,
                        'text-pink-500': item.is_current
                    }"
                >
                    {{ item.title }}
                </Link>
            </li>
        </ul>
    </nav>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";

export default {
    components: { Link },
    mounted() {
        console.log(this.$page.props.mainNav);
    }
};
</script>
