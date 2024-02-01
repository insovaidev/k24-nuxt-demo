// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        { src: '/bootstrap5.3.2/js/bootstrap.bundle.min.js' },
        { src: '/fancybox-5.0.0/fancybox.umd.js' }
      ],
      link: [
        { rel: 'stylesheet', href: '/bootstrap5.3.2/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/fancybox-5.0.0/fancybox.css' }
      ]
    }
  },
  modules: [
    '@nuxtjs/i18n', "nuxt-bootstrap-icons"
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
