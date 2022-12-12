<template>
    <div class="prose">
        <h1 v-if="level == 1">
            <slot />
        </h1>
        <h2 v-if="level == 2">
            <slot />
        </h2>
        <h3 v-if="level == 3">
            <slot />
        </h3>
        <h4 v-if="level == 4">
            <slot />
        </h4>
        <h5 v-if="level == 5">
            <slot />
        </h5>
        <h6 v-if="level == 6">
            <slot />
        </h6>
    </div>
    
</template>

<script>

export default {
    props: {
        level: {
            type: Number,
            default: 2,
        },
    },
};
</script>
