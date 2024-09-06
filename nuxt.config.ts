// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      titleTemplate: '%s – Nuxt3 Boilerplate',
    },
  },

  modules: ['@nuxtjs/tailwindcss', [
    '@pinia/nuxt',
    {
      autoImports: ['defineStore', 'acceptHMRUpdate']
    }
  ], '@nuxt/icon', '@nuxtjs/color-mode'],

  plugins: ['@/plugins/flowbite.client.ts'],

  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light'
  },

  tailwindcss: {
    cssPath: '~/assets/css/input.css'
  },
})