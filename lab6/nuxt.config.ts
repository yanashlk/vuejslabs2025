// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxtjs/sitemap", "@nuxtjs/robots", "@nuxt/ui"],

  //http://localhost:3000/robots.txt?mockProductionEnv - щоб побачити саме мої правила
  robots: {
    disallow: ["/admin", "/api", "/api/*"],

    allow: ["/", "/about", "/blog"],
  },

  sitemap: {
    //  динамічні сторінки блогу
    urls: ["/blog/what-is-nuxt4", "/blog/ssr-vs-ssg", "/blog/nitro-basics"],
  },
});
