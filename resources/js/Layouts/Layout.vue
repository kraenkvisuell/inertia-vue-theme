<template>
    <div class="flex flex-col w-full h-full p-4 text-slate-800">
        <MainNav class="mb-8" />

        <main class="w-full">
            <slot />
        </main>
    </div>
</template>

<script>
import MainNav from "@/Nav/MainNav.vue";

export default {
    components: {
        MainNav
    }
};
</script>
