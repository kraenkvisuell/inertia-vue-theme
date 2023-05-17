<template>
    <div class="flex justify-center text-center">
        <component 
            :is="level"
            class="font-headline text-headline-xl"
        >  
            <slot />
        </component>
    </div>
</template>

<script>

export default {
    props: {
        level: {
            type: String,
            default: 'h3',
        },
    },
};
</script>
