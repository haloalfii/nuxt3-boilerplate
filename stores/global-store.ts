import { defineStore, acceptHMRUpdate } from 'pinia'

interface IGlobal {
    mode: 'dark' | 'light'
}

export const useGlobalStore = defineStore('global', {
    state: () =>
    ({
        mode: 'light' 
    } as IGlobal),

    getters: {
        getMode(state) {
            return state.mode
        }
    },

    actions: {
        setMode(payload: 'dark' | 'light') {
            this.mode = payload
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
}