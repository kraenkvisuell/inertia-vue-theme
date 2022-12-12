<template>
    <div 
        class="
            inset-0 fixed z-40 
            px-[12px] pb-[12px] pt-[120px] 
            md:px-[45px] md:pb-[45px] md:pt-[160px]
            overflow-auto
        "
        :class="{
            'pointer-events-none': !menuIsVisible,
            'pointer-events-auto': menuIsVisible,
        }"
    >
        <button
            class="
                fixed top-[23px] right-[20px] md:top-[60px] md:right-[45px]
                w-[40px] h-[70px] pointer-events-auto cursor-pointer
            "
            @click="toggleMenu()"
        >   
            <Hamburger :menuIsVisible="menuIsVisible" />
        </button>   
        

        <div 
            class="transition-opacity pb-[20px]"
            :class="{
                'opacity-0': !menuIsVisible,
                'opacity-100': menuIsVisible
            }"
        >
            <nav class="
                w-full flex flex-col lg:flex-row lg:justify-evenly 
            ">
                <ItemBox v-for="item in $page.props.nav.main_nav">
                    <ItemBoxHeadline>
                        <AdvancedLink :link="item" />
                    </ItemBoxHeadline>

                    <ul v-if="item.children" class="mt-[16px]">
                        <ItemBoxItem 
                            v-for="child in item.children"
                            :isCurrent="child.is_current"
                        >
                            <AdvancedLink :link="child" />
                        </ItemBoxItem>
                    </ul>
                </ItemBox>
            </nav>

            <nav class="
                w-full 
                bg-gradient-to-r from-dark-blue/30 via-cyan-900/20 to-white/10 
                px-[12px] md:px-[30px] xl:px-[50px]
                py-[12px] md:py-[30px] xl:py-[50px]
            ">
                <SecondaryNav />

                <div class="
                    h-[4px] mt-[32px] mb-[25px]
                    bg-gradient-to-r from-white/0 via-cyan to-blue/0
                " />
                <MegaFooter />
            </nav>
            
        </div>
    </div>
</template>

<script>
import { Inertia } from '@inertiajs/inertia'
import AdvancedLink from '@/Shared/AdvancedLink.vue'
import eventBus from '@/eventBus'
import Hamburger from '@/Parts/Hamburger.vue'
import ItemBox from '@/Nav/MegaMenu/ItemBox.vue'
import ItemBoxHeadline from '@/Nav/MegaMenu/ItemBoxHeadline.vue'
import ItemBoxItem from '@/Nav/MegaMenu/ItemBoxItem.vue'
import MegaFooter from '@/Nav/MegaMenu/MegaFooter.vue'
import SecondaryNav from '@/Nav/MegaMenu/SecondaryNav.vue'

export default {
    components: { 
        AdvancedLink, Hamburger, ItemBox, ItemBoxHeadline, ItemBoxItem,
        MegaFooter, SecondaryNav,
    },
    data() {
        return {
            menuIsVisible: false,
        }
    },
    methods: {
        toggleMenu() {
            this.menuIsVisible = !this.menuIsVisible
            eventBus.$emit('menu-toggled', this.menuIsVisible) 
        }
    },
    mounted() {
        Inertia.on('start', (event) => {
            this.menuIsVisible = false
        })
        Inertia.on('success', (event) => {
            eventBus.$emit('menu-toggled', false) 
        })
    }
};
</script>
