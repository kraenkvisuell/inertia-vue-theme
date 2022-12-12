<template>
    <div class="
        flex 3xl:text-lg
        flex-col lg:flex-row lg:justify-between
        gap-[30px] lg:gap-0
    ">
        <div class="lg:w-[72.5%] 3xl:w-[49.6%]">
            <slot />
        </div>

        <div class="lg:w-[27.5%] 3xl:w-[51.6%]">
            <slot name="aside" />
        </div>
    </div>
</template>
