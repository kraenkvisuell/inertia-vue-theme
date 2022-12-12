<template>
    <figure>
        <img 
            v-if="image.is_image"
            :src="image.url"
            :alt="image.alt"
            loading="lazy"
            class="w-full"
        />

        <video
            v-if="image.is_video"
            autoplay muted loop playsinline
            loading="lazy"
            class="w-full" 
        >
            <source :src="image.url" :type="'video/'+image.extension">
        </video>

        <figcaption class="flex justify-between text-sm">
            <span v-text="caption" />
            <span v-if="credits" v-text="'© ' + credits" />
        </figcaption>
    </figure>
</template>

<script>

export default {
    props: {
        image: Object,
        caption: String,
        credits: String,
    },
};
</script>
