// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  modules: ['@vesp/nuxt-fontawesome', '@nuxt/image', '@nuxt/icon', '@nuxt/content'
  ],
  ssr: false,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
    }
  },
  icon: {
    mode: 'svg',
    customCollections: [
      {
        prefix: 'icon',
        dir: './app/assets/icons'
      },
    ],
  },
  image: {

  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_mixins.scss" as *;',
        },
      },
    },
  },
  css: [
  '@fortawesome/fontawesome-svg-core/styles.css'
  ],
})