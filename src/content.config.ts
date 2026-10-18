import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    category: z.enum([
      'bathroom-storage',
      'small-bathroom-ideas',
      'renter-friendly',
      'owner-updates',
      'organization-tips',
      'product-reviews',
    ]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    pinterestDescription: z.string().optional(),
  }),
});

const categories = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/categories' }),
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { posts, categories };
