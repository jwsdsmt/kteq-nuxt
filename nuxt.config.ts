// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/'
  },
  css: ['public/assets/css/style.css'],
  vite: {
    plugins: [tsconfigPaths()]
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
})
