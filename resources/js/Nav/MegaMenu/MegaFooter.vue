<template>
    <SecondarySection>
        <SecondaryBoxes>
            <SecondaryBox>
                <SecondaryHeadline v-text="'Contacts'" />

                <SecondaryItem>
                    <a :href="'tel:'+$page.props.globals.contact.main_phone">
                        T {{ $page.props.globals.contact.main_phone }}
                    </a>
                    <br />
                    <a :href="'mailto:'+$page.props.globals.contact.main_email">
                        {{ $page.props.globals.contact.main_email }}
                    </a>
                </SecondaryItem>
            </SecondaryBox>

            <SecondaryBox
                v-for="address in $page.props.globals.contact.addresses"
            >
                <SecondaryHeadline v-text="address.country" />

                <SecondaryItem v-html="nl2br(address.address)" />
            </SecondaryBox>
            
        </SecondaryBoxes>

        <template v-slot:aside>
            <div class="
                md:pl-[30px] xl:pl-[25px]
                flex justify-start flex-col 
                gap-[30px] 3xl:flex-row 3xl:gap-[calc(39%-140px)]
            ">
                <div>
                    <SecondaryHeadline 
                        v-for="footerPage in $page.props.nav.footer_pages"
                    >
                        <AdvancedLink :link="footerPage" />
                    </SecondaryHeadline>

                    <SecondaryItem>
                        © {{ new Date().getFullYear() }}
                        {{ $page.props.globals.contact.company }}
                    </SecondaryItem>
                </div>

                <div class="flex gap-[16px] items-center">
                    <SocialMediaLink
                        v-for="socialMediaLink in $page.props.globals.contact.social_media_links"
                        :link="socialMediaLink"
                    />
                </div>
            </div>  
        </template>
        
    </SecondarySection>
</template>

<script>
import AdvancedLink from '@/Shared/AdvancedLink.vue'
import helpers from '@/Mixins/helpers'
import ItemBoxHeadline from '@/Nav/MegaMenu/ItemBoxHeadline.vue'
import ItemBoxItem from '@/Nav/MegaMenu/ItemBoxItem.vue'
import SecondaryBox from '@/Nav/MegaMenu/SecondaryBox.vue'
import SecondaryBoxes from '@/Nav/MegaMenu/SecondaryBoxes.vue'
import SecondaryHeadline from '@/Nav/MegaMenu/SecondaryHeadline.vue'
import SecondaryItem from '@/Nav/MegaMenu/SecondaryItem.vue'
import SecondarySection from '@/Nav/MegaMenu/SecondarySection.vue'
import SocialMediaLink from '@/Shared/SocialMediaLink.vue'
import SpecialPageLink from '@/Nav/MegaMenu/SpecialPageLink.vue'

export default {
    components: { 
        AdvancedLink,
        ItemBoxHeadline,
        ItemBoxItem,
        SecondaryBox,
        SecondaryBoxes,
        SecondaryHeadline,
        SecondaryItem,
        SecondarySection,
        SecondarySection,
        SocialMediaLink,
        SpecialPageLink,
    },
    mixins: [ helpers ],
}
</script>
