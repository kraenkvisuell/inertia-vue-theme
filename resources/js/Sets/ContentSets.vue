<template>
    <component 
        v-for="set in sets" 
        :is="studly(set.type)" 
        :set="set"
    />
</template>

<script>

import { camelCase, upperFirst } from 'lodash'
import Image from '@/Sets/Image.vue'
import ImageOverview from '@/Sets/ImageOverview.vue'
import Text from '@/Sets/Text.vue'
import TextImage from '@/Sets/TextImage.vue'
import Video from '@/Sets/Video.vue'


export default {
    components: {
        Image,
        ImageOverview,
        Text,
        TextImage,
        Video,
    },
    props: {
        sets: Array,
    },
    methods: {
        studly(str) {
            return upperFirst(camelCase(str));
        }
    }
};
</script>
