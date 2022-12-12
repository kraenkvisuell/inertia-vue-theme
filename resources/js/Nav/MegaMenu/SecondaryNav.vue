<template>
    <SecondarySection>
        <SecondaryBoxes>
            <SecondaryBox v-for="item in $page.props.nav.secondary_nav">
                <ItemBoxHeadline v-text="item.title" />

                <ul v-if="item.children" class="mt-[16px]">
                    <ItemBoxItem 
                        v-for="child in item.children"
                        :isCurrent="child.is_current"
                    >
                        <AdvancedLink :link="child" />
                    </ItemBoxItem>
                </ul>
            </SecondaryBox>
        </SecondaryBoxes>

        <template v-slot:aside>
            <div class="h-full w-full flex items-center 3xl:pl-[39%]">
                <SpecialPageLink 
                    v-for="specialPage in $page.props.nav.special_pages"
                    class="py-[15px] pl-[23px] pr-[33px] uppercase"
                >
                    <AdvancedLink :link="specialPage" />
                </SpecialPageLink>
            </div>
        </template>
        
    </SecondarySection>
</template>

<script>
import AdvancedLink from '@/Shared/AdvancedLink.vue'
import ItemBoxItem from '@/Nav/MegaMenu/ItemBoxItem.vue'
import ItemBoxHeadline from '@/Nav/MegaMenu/ItemBoxHeadline.vue'
import SecondaryBox from '@/Nav/MegaMenu/SecondaryBox.vue'
import SecondaryBoxes from '@/Nav/MegaMenu/SecondaryBoxes.vue'
import SecondarySection from '@/Nav/MegaMenu/SecondarySection.vue'
import SpecialPageLink from '@/Nav/MegaMenu/SpecialPageLink.vue'

export default {
    components: { 
        AdvancedLink, ItemBoxItem, ItemBoxHeadline, SecondarySection, 
        SecondaryBox, SecondaryBoxes, SecondarySection, SpecialPageLink
    }
}
</script>
