import { defineStore, acceptHMRUpdate } from 'pinia'
import { type IMenu } from '~/constants/sidebar/types'
import { menus } from '~/constants/sidebar'

interface ISidebar {
    sidebar: IMenu[][]
}

export const useSidebarStore = defineStore('sidebar', {
    state: () =>
    ({
        sidebar: menus
    } as ISidebar),

    getters: {
        getMenu(state) {
            return state.sidebar 
        }
    },

    actions: {

    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSidebarStore, import.meta.hot))
}