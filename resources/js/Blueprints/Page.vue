<template>
    <div>
        <Head :title="$page.props.browserTitle" />
        <h1 class="text-2xl">Hallo Welt!</h1>

        <ContentSets :sets="entry.content" />
    </div>
</template>

<script>
import { Head } from "@inertiajs/inertia-vue3";
import ContentSets from "@/Shared/ContentSets.vue";

export default {
    components: {
        Head,
        ContentSets
    },
    data() {
        return {
            entry: this.$page.props.entry
        };
    }
};
</script>
