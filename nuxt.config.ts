// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'netlify-static'
  },
  app: {
    baseURL: '/'
  },
  css: ['public/assets/css/style.css'],
  vite: {
    plugins: []
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01'
})

