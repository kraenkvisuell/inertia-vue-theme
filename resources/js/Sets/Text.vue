<template>
<div class="grid gap-[20px] max-w-screen-md mx-auto">
    <Headline 
        v-if="set.headline"
        :level="set.headline_level.value"
    >
        {{ set.headline }}
    </Headline>

    <div
        class="editor font-copy"
        v-html="set.text"
    />
</div>
</template>

<script>
import Headline from '@/Shared/Headline.vue'

export default {
    components: { Headline },
    props: {
        set: Object,
    }
};
</script>
