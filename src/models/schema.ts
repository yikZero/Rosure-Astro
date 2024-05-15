import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const links = sqliteTable('links', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  feature: text('feature').notNull(),
  icon: text('icon'),
  iconThemedLight: text('iconThemedLight'),
  iconThemedDark: text('iconThemedDark'),
  category: text('category')
    .notNull()
    .references(() => categories.id),
  url: text('url').notNull(),
  isFavorite: text('isFavorite').default('0'),
});

export const categories = sqliteTable('categories', {
  id: integer('id').primaryKey(),
  name: text('name').notNull().unique(),
  url: text('url').notNull(),
});
