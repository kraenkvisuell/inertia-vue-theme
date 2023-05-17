<template>
<div class="grid gap-[20px]">
    <Headline 
        v-if="set.headline"
        :level="set.headline_level.value"
    >
        {{ set.headline }}
    </Headline>

    <div class="flex justify-center">
        <Image :set="set" />
    </div>
</div>
</template>

<script>
import Headline from '@/Shared/Headline.vue'
import Image from '@/Shared/Image.vue'

export default {
    components: {
    Headline,
    Image
},
    props: {
        set: Object,
    },
    mounted() {
        // console.log(this.raw(this.set));
    }
};
</script>
