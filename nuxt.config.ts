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
      { code: 'nl', name: 'Nederlands', file: 'nl.json' },
      { code: 'pl', name: 'Polski', file: 'pl.json' },
      { code: 'pt', name: 'Português', file: 'pt.json' },
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
        { name: 'description', content: 'GoldenPassport - Define Your Own Online "Fingerprint"! Privacy. Security. Responsibility. Take back control of your digital identity.' },
        { name: 'keywords', content: 'digital identity, privacy, online security, data protection, GDPR, identity management, anonymous login, data minimization, zero-knowledge, privacy passport' },
        { name: 'author', content: 'GoldenPassport' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'language', content: 'English' },
        { name: 'revisit-after', content: '7 days' },
        { name: 'rating', content: 'general' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'GoldenPassport' },
        { property: 'og:title', content: 'GoldenPassport - Define Your Own Online "Fingerprint"!' },
        { property: 'og:description', content: 'Privacy-focused online identity management platform. Control your personal data, protect from profiling, and maintain your right to privacy.' },
        { property: 'og:url', content: 'https://goldenpassport.com' },
        { property: 'og:image', content: 'https://goldenpassport.com/GoldenPassport.com.png' },
        { property: 'og:image:secure_url', content: 'https://goldenpassport.com/GoldenPassport.com.png' },
        { property: 'og:image:width', content: '1250' },
        { property: 'og:image:height', content: '1250' },
        { property: 'og:image:alt', content: 'GoldenPassport logo' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:locale:alternate', content: 'de_DE' },
        { property: 'og:locale:alternate', content: 'es_ES' },
        { property: 'og:locale:alternate', content: 'fr_FR' },
        { property: 'og:locale:alternate', content: 'nl_NL' },
        { property: 'og:locale:alternate', content: 'pl_PL' },
        { property: 'og:locale:alternate', content: 'pt_PT' },
        { property: 'og:locale:alternate', content: 'ja_JP' },
        { property: 'og:locale:alternate', content: 'zh_CN' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'GoldenPassport - Define Your Own Online "Fingerprint"!' },
        { name: 'twitter:description', content: 'Privacy-focused online identity management. Control your data, protect from profiling.' },
        { name: 'twitter:image', content: 'https://goldenpassport.com/GoldenPassport.com.png' },
        { name: 'twitter:image:alt', content: 'GoldenPassport logo' },
        // Theme color
        { name: 'theme-color', content: '#FDC30A' },
        { name: 'msapplication-TileColor', content: '#FDC30A' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '192x192', href: '/apple-touch-icon.png' },
        { rel: 'canonical', href: 'https://goldenpassport.com' },
        { rel: 'alternate', hreflang: 'en', href: 'https://goldenpassport.com' },
        { rel: 'alternate', hreflang: 'de', href: 'https://goldenpassport.com' },
        { rel: 'alternate', hreflang: 'es', href: 'https://goldenpassport.com' },
        { rel: 'alternate', hreflang: 'fr', href: 'https://goldenpassport.com' },
        { rel: 'alternate', hreflang: 'nl', href: 'https://goldenpassport.com' },
        { rel: 'alternate', hreflang: 'pl', href: 'https://goldenpassport.com' },
        { rel: 'alternate', hreflang: 'pt', href: 'https://goldenpassport.com' },
        { rel: 'alternate', hreflang: 'ja', href: 'https://goldenpassport.com' },
        { rel: 'alternate', hreflang: 'zh', href: 'https://goldenpassport.com' },
        { rel: 'alternate', hreflang: 'x-default', href: 'https://goldenpassport.com' }
      ]
    }
  }
})
