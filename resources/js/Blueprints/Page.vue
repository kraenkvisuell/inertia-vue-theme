<template>
    <div>
        <Head :title="$page.props.browserTitle" />
        
        <ContentSets :sets="entry.main_content" />
    </div>
</template>

<script>
import { Head } from '@inertiajs/inertia-vue3'
import ContentSets from '@/Sets/ContentSets.vue'
import Headline from '@/Shared/Headline.vue'
import helpers from '@/Mixins/helpers'

export default {
    components: {
        ContentSets,
        Head,
        Headline
    },
    mixins: [helpers],
    data() {
        return {
            entry: this.$page.props.entry
        };
    },
    mounted() {
        console.log(this.raw(this.entry));
    }
};
</script>
