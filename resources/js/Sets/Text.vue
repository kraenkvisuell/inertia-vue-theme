<template>
    <div class="bg-slate-200 my-4 p-2" v-html="set.text" />
</template>

<script>
export default {
    props: {
        set: Object,
    }
};
</script>
