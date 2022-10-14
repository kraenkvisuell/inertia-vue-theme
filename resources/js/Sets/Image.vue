<template>
    <div class="bg-slate-200 my-4 p-2 flex justify-start">
        <figure>
            <img 
                :src="set.file.url"
                :alt="set.file.alt"
                class="max-w-full max-h-64"
            />
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
        }
    };
</script>
