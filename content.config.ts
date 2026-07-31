import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "posts/*.md",
      schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string(),
        image: z.string(),
        published: z.boolean(),
        slug: z.string().optional()
      })
    }),
  },
})