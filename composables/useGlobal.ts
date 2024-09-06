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

    return {
        setMode,
        getMode
    }
}