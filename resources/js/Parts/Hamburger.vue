<template>
    <div>   
        <HamburgerLine
            :class="{
                'rotate-0 w-[30px] md:w-[40px] top-[0] right-[0]': !menuIsVisible,
                'rotate-[-40deg] origin-top-right w-[40px] md:w-[50px] top-[-1px] right-[2px]': menuIsVisible
            }"
        />

        <HamburgerLine
            class="top-[11px] md:top-[15px] w-[30px] md:w-[40px] right-[0]"
            :class="{
                'opacity-100': !menuIsVisible,
                'opacity-0': menuIsVisible
            }"
        />

        <HamburgerLine
            :class="{
                'rotate-0 w-[30px] md:w-[40px] top-[22px] md:top-[30px] right-[0]': !menuIsVisible,
                'rotate-[40deg] origin-bottom-right w-[40px] md:w-[50px] top-[25px] md:top-[31px] right-[2px]': menuIsVisible
            }"
        />
    </div>
</template>

<script>
import HamburgerLine from '@/Parts/HamburgerLine.vue'

export default {
    components: { HamburgerLine },
    props: {
        menuIsVisible: {
            type: Boolean,
            default: true,
        },
    }
};

</script>
