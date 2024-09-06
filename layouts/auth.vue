<template>
    <div class="">
        <slot />
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useFlowbite } from '~/composables/useFlowbite';
const global = useGlobal()

const { getMode } = storeToRefs(global)
const { setMode, processMode } = global

onMounted(async () => {
    processMode()
    useFlowbite(() => {
        initFlowbite();
    })
})
</script>

<style lang="scss" scoped>

</style>