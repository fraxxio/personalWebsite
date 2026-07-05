import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const projectCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      thumbnail: image(),
      secondaryThumbnail: image().optional(),
      featured: z.boolean(),
      website: z.string().optional(),
      github: z.string(),
    }),
});

export const collections = {
  projects: projectCollection,
};
