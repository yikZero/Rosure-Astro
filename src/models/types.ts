import { categories, links } from '@/models/schema.ts';
import type { InferSelectModel } from 'drizzle-orm';

export type Links = InferSelectModel<typeof links>;
export type Categories = InferSelectModel<typeof categories>;
