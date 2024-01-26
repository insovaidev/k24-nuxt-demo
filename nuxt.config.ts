// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "~/assets/scss/_colors.scss" as *;'
  //       }
  //     }
  //   }
  // },
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    // locales: ['en', 'km'],  // used in URL path prefix
    defaultLocale: 'en',    // default locale of your project for Nuxt pages and routings
    locales: [
      {
        code: 'en',
        file: 'C:/k24/nuxt-demo/locales/en.json'
      },
      {
        code: 'km',
        file: 'C:/k24/nuxt-demo/locales/km.json'
      },
    ],
    strategy: 'prefix_except_default',
  },
  components: [
    { path: '~/components', extensions: ['vue'] },
    { path: '~/components/form', extensions: ['vue'] },
    { path: '~/components/header', extensions: ['vue'] },
  ],
})

