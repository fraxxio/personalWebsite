import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      thumbnail: image(),
      featured: z.boolean(),
    }),
});

export const collections = {
  projects: projectCollection,
};
