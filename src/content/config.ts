import { defineCollection, z } from "astro:content";

const links = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    category: z.string(),
  }),
});

const cases = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const workshops = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
  }),
});

export const collections = { links , cases, workshops };
