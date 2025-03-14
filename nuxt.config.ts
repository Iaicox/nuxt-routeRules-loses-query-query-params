// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-22',
  devtools: { enabled: true },
  routeRules: {
    '/example': { redirect: '/test' },
  },
});
