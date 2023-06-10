import { defineStore } from 'pinia'
import axios from 'axios'

export const sessionStore = defineStore('session', {
    state: () => ({ 
        externalContentConfirmed: false,
    }),
    actions: {
        confirmExternalContent() {
            this.externalContentConfirmed = true

            axios.post('/api/confirm-external-content')
        },
    },
})
