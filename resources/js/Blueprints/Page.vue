<template>
    <div>
        <Head :title="entry.title" />

        <ContentSets
            :sets="entry.main_replicator ? entry.main_replicator : []"
        />
    </div>
</template>

<script>
import { Head } from '@inertiajs/vue3'
import ContentSets from '@/Shared/ContentSets.vue'
import Layout from '@/Layouts/Layout.vue'

export default {
    layout: Layout,
    components: {
        Head,
        ContentSets,
        Layout,
    },
    data() {
        return {
            entry: this.$page.props.entry,
        };
    },
    computed: {
        isHome(){
            return this.entry.url == '/'
        },
    }
};
</script>
