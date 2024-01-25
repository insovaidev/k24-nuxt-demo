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
    /* module options */
    legacy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        file: 'en.json'
      },
      {
        code: 'kh',
        file: 'kh.json'
      }
    ]
  },
  components: [
    { path: '~/components', extensions: ['vue'] },
    { path: '~/components/form', extensions: ['vue'] },
    { path: '~/components/header', extensions: ['vue'] },
  ],
})