// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-22',
  devtools: { enabled: true },
  app: {
    baseURL: '/nuxt-routeRules-loses-query-query-params'
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
    '/test': { redirect: '/' },
  },
});
