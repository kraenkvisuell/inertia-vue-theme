import { defineStore } from 'pinia'

export const naviStore = defineStore('navi', {
    state: () => ({ 
        activeMobileChildren: '' ,
        mobileMenuIsOpen: false,
    }),
    actions: {
        toggleMobileChildren(id) {
            this.activeMobileChildren = (id == this.activeMobileChildren) ? '' : id
        },
        closeMobileMenu() {
            this.mobileMenuIsOpen = false
        },
        toggleMobileMenu() {
            this.mobileMenuIsOpen = !this.mobileMenuIsOpen
        },
    },
})
