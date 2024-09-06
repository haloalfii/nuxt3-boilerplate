// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', [
    '@pinia/nuxt',
    {
      autoImports: ['defineStore', 'acceptHMRUpdate']
    }
  ], '@nuxt/icon', '@nuxtjs/color-mode'],

  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light'
  },

  tailwindcss: {
    cssPath: '~/assets/css/input.css'
  },
  
  app: {
    head: {
      titleTemplate: '%s – Nuxt3 Boilerplate',
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js',
          type: 'text/javascript',
          defer: true,
        },
      ],
    },
  }
})