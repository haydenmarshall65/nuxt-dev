// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    apiSecret: '123',

    public: {
      apiBase: '/api'
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: ''
  }
})
