import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    // 栏目 slug：hot（热点速递）/ reviews（开源工具实测）/ ai-agent（AI 与 Agent 动态）/ rankings（榜单解读）/ science（科普）
    section: z.enum(['hot', 'reviews', 'ai-agent', 'rankings', 'science']),
    category: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { posts };
