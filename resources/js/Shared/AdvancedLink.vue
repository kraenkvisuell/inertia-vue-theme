<template>
    <Link v-if="link.url && !link.is_external" :href="link.url">
        {{ link.title }}
    </Link>

    <a 
        v-else-if="link.url && link.is_external" 
        :href="ensureUrl(link.url)"
        target="_blank"
    >
        {{ link.title }}
    </a>

    <span v-else>
        {{ link.title }}
    </span>
</template>

<script>
import { Link } from '@inertiajs/vue3'
import helpers from '@/Mixins/helpers'

export default {
    components: { Link },
    props: {
        link: Object,
    },
    mixins: [ helpers ]
};
</script>
