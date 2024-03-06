import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    thumbnail: z.string().optional(),
    featured: z.boolean(),
  }),
});

export const collections = {
  projects: projectCollection,
};
