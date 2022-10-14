<template>
    <div class="bg-slate-200 my-4 p-2 flex flex-wrap gap-4">
        <div v-for="image in set.images">
            <div class="flex justify-start">
                <figure>
                    <img 
                        :src="image.file.url"
                        :alt="image.file.alt"
                        class="max-w-full max-h-32"
                    />
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            set: Object,
        }
    };
</script>
