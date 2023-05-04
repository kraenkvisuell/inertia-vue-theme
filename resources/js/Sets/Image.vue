<template>
    <div class="py-[20px]">
        <component 
            v-if="set.headline"
            :is="headlineLevel"
            class="font-headline text-headline-xl text-dark"
        >
            <span v-text="set.headline" />
        </component>

        <figure>
            <img 
                v-if="set.kind.value != 'video_file'"
                :src="imageUrl"
                :alt="imageAlt"
                loading="lazy"
                class="max-w-full max-h-64"
            />

            <video
                v-if="set.kind.value == 'video_file'"
                autoplay muted loop playsinline
                loading="lazy"
                class="max-w-full max-h-64" 
            >
                <source :src="set.video_file.url" :type="'video/'+set.video_file.extension">
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
        computed: {
            headlineLevel() {
                return this.set.headline_level == 'h2' ? 'h2' : 'h3'
            },
            imageUrl() {
                if (this.set.kind.value == 'random_url') {
                    let width = parseInt(this.set.image_width) ? parseInt(this.set.image_width) : 1200
                    let height = parseInt(this.set.image_height) ? parseInt(this.set.image_height) : 1200

                    return 'https://picsum.photos/seed/'+this.set.id+'/'+width+'/'+height
                }

                if (this.set.kind.value == 'image_file') {
                    return this.set.image_file.url
                }

                if (this.set.kind.value == 'url') {
                    return this.set.image_url
                }

                return ''
            },
            imageAlt() {

                return ''
            }
        },
        mounted() {
            console.log(this.raw(this.set));
        }
    };
</script>
