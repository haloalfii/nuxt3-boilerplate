<template>
    <div class="antialiased bg-gray-50 dark:bg-gray-900">
        <DashboardNavbar />

        <!-- Sidebar -->
        <DashboardSidebar />

        <slot />
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
const global = useGlobal()

const { getMode } = storeToRefs(global)
const { setMode } = global

onMounted(async() => {
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
})
</script>

<style lang="scss" scoped>

</style>