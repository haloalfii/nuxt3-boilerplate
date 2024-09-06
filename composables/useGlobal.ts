import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores/global-store'

export const useGlobal = () => {
    const globalStore = useGlobalStore()

    const {
        setMode
    } = globalStore

    const {
        getMode
    } = storeToRefs(globalStore)

    const processMode = () => {
        const html = document.body
        const mode = localStorage.getItem('theme')

        if (mode === 'dark') {
            localStorage.theme = 'dark'
            setMode('dark')
            html.classList.add('dark')
        } else {
            localStorage.theme = 'light'
            setMode('light')
            html.classList.remove('dark')
        }
    }

    return {
        setMode,
        getMode,
        processMode
    }
}