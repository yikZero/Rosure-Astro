import type { Config } from 'drizzle-kit';

export default {
  dialect: 'sqlite',
  schema: './src/models/schema.ts',
  out: './drizzle',
  dbCredentials: {
    url: './db.sqlite3',
  },
} satisfies Config;
