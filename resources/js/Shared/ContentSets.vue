<template>
<div class="grid gap-[80px]">
    <div v-for="set in sets">
        <component 
            :is="studly(set.type)" 
            :set="set"
        />
    </div>
</div>
</template>

<script>
import { camelCase, upperFirst } from "lodash";

import Text from "@/Sets/Text.vue";
import Image from "@/Sets/Image.vue";
import Video from "@/Sets/Video.vue";
import ImageOverview from "@/Sets/ImageOverview.vue";


export default {
    components: {
        Text,
        Image,
        Video,
        ImageOverview,
    },
    props: {
        sets: Array,
    },
    methods: {
        studly(str) {
            return upperFirst(camelCase(str));
        }
    },
    mounted() {
       //console.log(this.raw(this.sets));
    }
};
</script>
