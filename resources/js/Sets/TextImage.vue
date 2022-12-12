<template>
    <div>
        <Headline v-if="set.headline && set.headline_position.value == 'above_both'">
            <span v-html="nl2br(set.headline)" />
        </Headline>   

        <div 
            class="flex justify-between gap-[40px]"
            :class="{
                'flex-col-reverse md:flex-row-reverse': set.order.value == 'image_text',
                'flex-col md:flex-row': set.order.value == 'text_image',
            }"
        >
            <div
                class="md:w-[50%]"
                :class="{
                    'lg:w-[50%]': set.distribution.value == 'even',
                    'lg:w-[60%]': set.distribution.value == '60_40',
                    'lg:w-[70%]': set.distribution.value == '70_30',
                    'lg:w-[30%]': set.distribution.value == '30_70',
                    'lg:w-[40%]': set.distribution.value == '40_60',
                }"
            >
                <Headline v-if="set.headline && set.headline_position.value == 'above_text'">
                    <span v-html="nl2br(set.headline)" />
                </Headline>

                <Text>
                    <div v-html="set.text"></div>
                </Text>
            </div>

            <div
                class="md:w-[50%]"
                :class="{
                    'lg:w-[50%]': set.distribution.value == 'even',
                    'lg:w-[40%]': set.distribution.value == '60_40',
                    'lg:w-[30%]': set.distribution.value == '70_30',
                    'lg:w-[70%]': set.distribution.value == '30_70',
                    'lg:w-[60%]': set.distribution.value == '40_60',
                }"
            >
                <Headline v-if="set.headline && set.headline_position.value == 'above_image'">
                    <span v-html="nl2br(set.headline)" />
                </Headline>


                <Image 
                    :image="set.image" 
                    :caption="set.caption" 
                    :credits="set.credits" 
                    class="w-full"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Headline from '@/Shared/Headline.vue'
import helpers from '@/Mixins/helpers'
import Image from '@/Shared/Image.vue'
import Text from '@/Shared/Text.vue'

export default {
    components: { Headline, Image, Text, },
    props: {
        set: Object,
    },
    mixins: [helpers],
};
</script>
