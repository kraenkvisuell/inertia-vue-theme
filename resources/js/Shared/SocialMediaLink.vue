<template>
    <a 
        :href="ensureUrl(link.url)"
        :title="link.title"
        target="_blank"
        class="block"
    >
        <i 
            class="text-[27px]"
            :class="iconClass" 
        />
    </a>
</template>

<script>
import helpers from '@/Mixins/helpers'

export default {
    props: {
        link: Object,
    },
    mixins: [ helpers ],
    computed: {
        iconClass() {
            let suffix = this.link.icon 
                ? this.link.icon 
                : _.trim(this.link.title.toLowerCase())

            return 'fa-brands fa-'+suffix;
        }
    }
};
</script>
