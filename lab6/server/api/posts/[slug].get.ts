export default defineEventHandler((event) => {
  const { slug } = event.context.params as { slug: string };

  const posts = [
    {
      title: "Що таке Nuxt 4?",
      slug: "what-is-nuxt4",
      content: "Nuxt 4 спрощує SSR, SSG та покращує DX.",
    },
    {
      title: "SSR vs SSG",
      slug: "ssr-vs-ssg",
      content:
        "SSR рендерить сторінку на сервері при кожному запиті, SSG — під час білду.",
    },
    {
      title: "Що таке Nitro Server",
      slug: "nitro-basics",
      content:
        "Nitro дозволяє створювати API-роути, middleware і рендерити сторінки.",
    },
  ];

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    throw createError({
      statusCode: 404,
      statusMessage: "Статтю не знайдено",
    });
  }

  return post;
});
