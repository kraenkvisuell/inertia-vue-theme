<template>
<div class="grid gap-[20px]">
    <Headline 
        v-if="set.headline"
        :level="set.headline_level.value"
    >
        {{ set.headline }}
    </Headline>

    <figure class="w-full">
        <div 
            v-if="set.video_kind.value == 'embed'"
            class="w-full"
            :class="[
                'aspect-w-'+aspectWidth,
                'aspect-h-'+aspectHeight,
            ]"
        >
            <div
                class="iframe-container"
                v-html="set.embed_code.value"
            />
        </div>

        <div 
            v-if="set.video_kind.value == 'file'"
            class="w-full"
            :class="[
                'aspect-w-'+aspectWidth,
                'aspect-h-'+aspectHeight,
            ]"
        >
            <div class="absolute w-full h-full">
                <video 
                    class="video-js w-full h-full" 
                    playsinline 
                    ref="videoPlayer"
                    :poster="set.video_poster ? set.video_poster.presets.lg : null"
                >
                    <source :src="set.video_file.url" :type="set.video_file.mime_type">

                    <source 
                        v-if="set.fallback_video_file"
                        :src="set.fallback_video_file.url" :type="set.fallback_video_file.mime_type"
                    > 

                </video>
            </div>
        </div>

        <figcaption class="flex justify-between gap-[30px] text-sm">
            <div v-html="set.caption ? nl2br(set.caption) : ''" />

            <div 
                v-if="set.credits" 
                class="whitespace-nowrap text-medium"
                v-text="'© ' + set.credits" 
            />
        </figcaption>
    </figure>
</div>
</template>

<script>
import Headline from '@/Shared/Headline.vue'
import videojs from 'video.js'

export default {
    components: { Headline },
    props: {
        set: Object,
    },
    data() {
        return {
            player: null
        }
    },
    computed: {
        aspectWidth() {
            return parseInt(this.set.aspect_width) ? parseInt(this.set.aspect_width) : 16
        },
        aspectHeight() {
            return parseInt(this.set.aspect_height) ? parseInt(this.set.aspect_height) : 16
        },
        videoUrl() {
            if (this.set.video_kind.value == 'file') {
                return this.set.video_file.url
            }

            return this.set.video_url
        }
    },
    mounted() {
        if (this.set.video_kind.value == 'file') {
            this.player = videojs(this.$refs.videoPlayer, {
                controls: true,
                muted: false,
            }, () => {
                this.player.log('onPlayerReady', this);
            });
        }

        console.log(this.raw(this.set));
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose();
        }
    }
}
</script>
