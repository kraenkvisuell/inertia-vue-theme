<template>
    <div class="bg-slate-200 my-4 p-2 flex justify-start">
        <div>
            <div
                v-html="set.embed_code.value"
            />

            <div class="flex justify-between text-sm">
                <span v-text="set.caption" />
                <span v-if="set.credits" v-text="'© ' + set.credits" />
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
