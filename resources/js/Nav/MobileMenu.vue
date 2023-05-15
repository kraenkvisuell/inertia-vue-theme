<template>
<div 
    class="
        md:hidden
        z-40
        absolute top-0 left-0 
        w-full h-full 
    "
>
   
    <Hamburger />

    <MobileMenuPane />
</div>
</template>

<script>
import MobileMenuPane from '@/Nav/MobileMenuPane.vue'
import Hamburger from '@/Nav/Hamburger.vue'

export default {
    components: { 
        Hamburger, 
        MobileMenuPane,  
    },
};
</script>
