// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-22',
  devtools: { enabled: true },
  nitro: {
    prerender: {
      failOnError: false,
      routes: [ '/', '/test' ],
      ignore: [/^\/example/],
    }
  },
  routeRules: {
    '/example': { redirect: '/test' },
  },
});
