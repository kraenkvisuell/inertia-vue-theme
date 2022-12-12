<template>
    <div class="fixed inset-0 bg-blue-900">   
        <div class="w-full h-full">
            <video 
                muted autoplay playsinline loop
                v-if="$page.props.globals.website.bg_video.url"
                class="w-full h-full object-cover"
            >
                <source :src="$page.props.globals.website.bg_video.url" />
            </video>
        </div>
    </div>
</template>
