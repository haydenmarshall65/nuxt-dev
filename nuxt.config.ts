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
  routeRules: {
    '/': { ssr: false }
  },
  runtimeConfig: {
    apiSecret: '123',

    public: {
      apiBase: '/api'
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
})