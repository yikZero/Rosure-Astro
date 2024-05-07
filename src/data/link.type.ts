import type { tCategory } from '@/data/category.type';

type CategoryPair = [tCategory, tCategory];
type CategoryTriple = [tCategory, tCategory, tCategory];

export interface iLink {
  title: string;
  description: string;
  feature: string[];
  icon?: any;
  iconThemed?: {
    light?: any;
    dark?: any;
  };
  category: tCategory | CategoryPair | CategoryTriple;
  url: string;
  isFavorite?: boolean;
}
