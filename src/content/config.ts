import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    thumbnail: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  projects: projectCollection,
};
