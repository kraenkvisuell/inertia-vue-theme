<template>
    <div 
        class="uppercase mt-[8px] leading-tight"
        :class="{
            'opacity-50 pointer-events-none': isCurrent,
        }"
    >
        <slot />
    </div>
</template>

<script>

export default {
    props: {
        isCurrent: {
            type: Boolean,
            default: false,
        }
    }
}
</script>
