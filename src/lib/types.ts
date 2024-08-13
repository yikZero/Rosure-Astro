import { z } from 'astro:content';

export const LinkSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  feature: z.string(),
  icon: z.string().url().optional(),
  iconLight: z.string().url().optional(),
  iconDark: z.string().url().optional(),
  category: z.string(),
  url: z.string().url(),
  isFavorite: z.boolean().default(false),
  createdTime: z.string().datetime(),
});

export type Link = z.infer<typeof LinkSchema>;

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  url: z.string(),
});

export type Category = z.infer<typeof CategorySchema>;

export const CategoriesSchema = z.array(CategorySchema);

export type Categories = z.infer<typeof CategoriesSchema>;

export const LinksSchema = z.array(LinkSchema);

export type Links = z.infer<typeof LinksSchema>;
