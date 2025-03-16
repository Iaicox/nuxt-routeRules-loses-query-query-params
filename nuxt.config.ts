// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-22',
  devtools: { enabled: true },

  ssr: false,
  app: {
    baseURL: '/nuxt-routeRules-loses-query-query-params',
    head: {
      base: { href: '/nuxt-routeRules-loses-query-query-params' },
    },
  },
  nitro: {
    prerender: {
      failOnError: false,
      routes: [ '/' ],
      ignore: [/^\/example/],
      crawlLinks: false,
    }
  },
  routeRules: {
    '/example': { redirect: '/test' },
  },
});
