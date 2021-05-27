import i18n from './config/i18n'

export default {
  head: {
    title: 'starter-pack-nuxt',
    htmlAttrs: {
      lang: 'cs-CZ'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@assets/scss/main.scss'
  ],

  styleResources: {
    scss: '@/assets/scss/_vars.scss'
  },

  bootstrapVue: {
    icons: true
  },

  plugins: [
    '~plugins/GlobalComponents'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-i18n'
  ],

  i18n: {
    strategy: 'prefix',
    seo: true,
    defaultLocale: 'cs',
    fallbackLocale: ['cs', 'en'],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true
    },
    locales: [
      {
        code: 'cs',
        iso: 'cs-CZ',
        name: 'Česky',
        file: 'cs.json'
      },
      {
        code: 'en',
        iso: 'en-UK',
        name: 'English',
        file: 'en.json'
      }
    ],
    lazy: true,
    langDir: 'locales/',
    vueI18n: i18n
  },

  axios: {},

  build: {}
}
