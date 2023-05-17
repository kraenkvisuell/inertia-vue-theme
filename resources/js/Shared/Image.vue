<template>
<figure class="w-full max-w-[600px] grid gap-[5px]">
    <picture v-if="set.image_kind.value != 'video_file'">
        <source 
            v-if="set.image_kind.value == 'image_file'"
            media="(min-width: 728px)"
            :srcset="set.image_file.presets.lg" :type="set.image_file.mime_type"
        > 

        <source 
            v-if="set.image_kind.value == 'image_file'"
            media="(min-width: 1140px)"
            :srcset="set.image_file.presets.xl" :type="set.image_file.mime_type"
        > 

        <source 
            v-if="set.image_kind.value == 'image_file' && set.fallback_image_file"
            media="(min-width: 728px)"
            :srcset="set.fallback_image_file.presets.lg" 
            :type="set.fallback_image_file.mime_type"
        > 

        <source 
            v-if="set.image_kind.value == 'image_file' && set.fallback_image_file"
            media="(min-width: 1140px)"
            :srcset="set.fallback_image_file.presets.xl" 
            :type="set.fallback_image_file.mime_type"
        >

        <img 
            :src="imageUrl"
            :alt="imageAlt"
            loading="lazy"
            class="w-full"
        />
    </picture>
    
    <video
        v-else
        autoplay muted loop playsinline
        loading="lazy"
        class="max-w-full" 
    >
        <source :src="set.video_file.url" :type="set.video_file.mime_type">

        <source 
            v-if="set.fallback_video_file"
            :src="set.fallback_video_file.url" :type="set.fallback_video_file.mime_type"
        > 
    </video>

    <figcaption class="flex justify-between gap-[30px] text-sm">
        <div v-html="set.caption ? nl2br(set.caption) : ''" />

        <div 
            v-if="set.credits" 
            class="whitespace-nowrap text-medium"
            v-text="'© ' + set.credits" 
        />
    </figcaption>
</figure>
</template>

<script>

export default {
    props: {
        set: Object,
    },
    data() {
        return {
            alt: '',
        }
    },
    computed: {
        imageUrl() {
            if (this.set.image_kind.value == 'random_url') {
                let width = parseInt(this.set.image_width) ? parseInt(this.set.image_width) : 1100
                let height = parseInt(this.set.image_height) ? parseInt(this.set.image_height) : 1100

                return 'https://picsum.photos/seed/'+this.set.id+'/'+width+'/'+height
            }

            if (this.set.image_kind.value == 'image_file') {
                return this.set.image_file.presets.base
            }

            if (this.set.image_kind.value == 'url') {
                return this.set.image_url
            }

            return ''
        },
        imageAlt() {
            if (this.set.image_kind.value == 'image_file') {
                return this.set.image_file.alt
            }

            return this.set.image_alt
        }
    },
    mounted() {
        //console.log(this.raw(this.set));
    }
};
</script>
