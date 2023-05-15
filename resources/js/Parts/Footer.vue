<template>
<div
    class="
        flex justify-between gap-[40px] items-center 
        bg-darkest
        font-navi text-lightest text-navi-sm
        px-[20px] py-[15px]
    "
>
    <div>
        <FooterNav />
    </div>
    
    <div>
        © {{ year }} Krænk Visuell 
    </div>
</div>
</template>

<script>
import FooterNav from '@/Nav/FooterNav.vue'
import dayjs from 'dayjs'

export default {
    components: { FooterNav },
    computed: {
        year() {
            return dayjs().format('YYYY')
        }
    }
};
</script>
