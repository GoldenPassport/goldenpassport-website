// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n'
  ],

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },

  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'de', name: 'Deutsch', file: 'de.json' },
      { code: 'es', name: 'Español', file: 'es.json' },
      { code: 'fr', name: 'Français', file: 'fr.json' },
      { code: 'ja', name: '日本語', file: 'ja.json' },
      { code: 'zh', name: '中文', file: 'zh.json' }
    ],
    defaultLocale: 'en',
    langDir: './locales',
    strategy: 'no_prefix',
    vueI18n: './i18n/i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'gp_lang',
      redirectOn: 'root'
    }
  },

  app: {
    head: {
      title: 'GoldenPassport',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'GoldenPassport - Online Privacy Passport. Privacy. Security. Responsibility. Take back control of your digital identity.' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'GoldenPassport' },
        { property: 'og:title', content: 'GoldenPassport - Online Privacy Passport' },
        { property: 'og:description', content: 'Privacy-focused online identity management platform. Control your personal data, protect from profiling, and maintain your right to privacy.' },
        { property: 'og:image', content: '/GoldenPassport.com.png' },
        { property: 'og:image:width', content: '1250' },
        { property: 'og:image:height', content: '1250' },
        { property: 'og:image:alt', content: 'GoldenPassport logo' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'GoldenPassport - Online Privacy Passport' },
        { name: 'twitter:description', content: 'Privacy-focused online identity management. Control your data, protect from profiling.' },
        { name: 'twitter:image', content: '/GoldenPassport.com.png' },
        // Theme color
        { name: 'theme-color', content: '#FDC30A' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '192x192', href: '/apple-touch-icon.png' }
      ]
    }
  }
})

