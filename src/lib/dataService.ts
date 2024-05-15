import { db } from '@/lib/db';

export async function getAllCategories() {
  return db.query.categories.findMany();
}

export async function getAllLinks() {
  const allLinks = await db.query.links.findMany();
  return allLinks.map((link) => ({
    ...link,
    isFavorite: !!link.isFavorite,
  }));
}

export async function getLinksByCategory() {
  const allCategories = await getAllCategories();
  const allLinks = await getAllLinks();

  const categoriesWithLinks = allCategories.map((category) => {
    const categoryLinks = allLinks.filter(
      (link) => link.category === category.id.toString(),
    );
    return {
      ...category,
      links: categoryLinks,
      linkCount: categoryLinks.length,
    };
  });

  const totalLinkCount = allLinks.length;

  return {
    categories: categoriesWithLinks,
    totalLinkCount,
  };
}
