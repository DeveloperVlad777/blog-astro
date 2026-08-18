import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      lang: z.enum(["en", "ru", "pt"]),
      articleId: z.string(),
      title: z.string(),
      hook: z.string(),
      description: z.string(),
      category: z.enum([
        "blockchain-infrastructure",
        "crypto-basics",
        "investing-finance",
        "prop-trading",
        "risk-psychology",
        "technical-analysis",
        "trading-strategies",
        "success-stories",
      ]),
      publishDate: z.coerce.date(),
      readingMinutes: z.number(),
      heroImage: image(),
      heroImageAlt: z.string(),
      intro: z.array(z.string()).optional(),
      video: z
        .object({
          youtubeId: z.string(),
          label: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        })
        .optional(),
      faq: z
        .array(
          z.object({
            question: z.string(),
            answer: z.string(),
          }),
        )
        .optional(),
      finalPromo: z
        .object({
          title: z.string(),
          description: z.string(),
          buttonText: z.string(),
          buttonUrl: z.string(),
        })
        .optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
