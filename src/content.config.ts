import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lecturas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lecturas' }),
  schema: z.object({
    title:      z.string(),
    author:     z.string(),
    genre:      z.enum(['ficcion', 'ensayo', 'poesia', 'filosofia', 'historia', 'otro']),
    coverImage: z.string().optional(),
    rating:     z.number().min(1).max(5).optional(),
    date:       z.date(),
    readTime:   z.string(),
    excerpt:    z.string(),
    year:       z.number().optional(),
    pages:      z.number().optional(),
    publisher:  z.string().optional(),
  }),
});

const notas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notas' }),
  schema: z.object({
    title:    z.string(),
    date:     z.date(),
    readTime: z.string(),
    excerpt:  z.string(),
  }),
});

export const collections = { lecturas, notas };