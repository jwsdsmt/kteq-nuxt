// https://nuxt.com/docs/api/configuration/nuxt-config
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  css: ['public/assets/css/style.css'],
  vite:{
    plugins: [
      tsconfigPaths()
    ],
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
})