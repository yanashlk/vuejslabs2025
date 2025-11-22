export default defineEventHandler(() => {
  return [
    {
      title: "Що таке Nuxt 4?",
      slug: "what-is-nuxt4",
      content:
        "Nuxt 4 — це сучасний фреймворк для створення SSR, SSG та SPA застосунків.",
    },
    {
      title: "SSR vs SSG",
      slug: "ssr-vs-ssg",
      content:
        "Пояснення різниці між Server-Side Rendering та Static Site Generation.",
    },
    {
      title: "Що таке Nitro Server",
      slug: "nitro-basics",
      content:
        "Nitro — це серверний рушій Nuxt, який відповідає за API та рендеринг.",
    },
  ];
});
