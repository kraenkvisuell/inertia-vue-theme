<template>
    <div class="bg-slate-200 my-4 p-2 flex justify-start">
        <figure>
            <img 
                v-if="set.file.is_image"
                :src="set.file.url"
                :alt="set.file.alt"
                loading="lazy"
                class="max-w-full max-h-64"
            />

            <video
                v-if="set.file.is_video"
                autoplay muted loop playsinline
                loading="lazy"
                class="max-w-full max-h-64" 
            >
                <source :src="set.file.url" :type="'video/'+set.file.extension">
            </video>

            <figcaption class="flex justify-between text-sm">
                <span v-text="set.caption" />
                <span v-if="set.credits" v-text="'© ' + set.credits" />
            </figcaption>
        </figure>
    </div>
</template>

<script>
    export default {
        props: {
            set: Object,
        },
        mounted() {
            console.log(this.set);
        }
    };
</script>
