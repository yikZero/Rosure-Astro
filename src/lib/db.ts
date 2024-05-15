import * as schema from '@/models/schema.ts';
import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';

const sqlite = new Database('./db.sqlite3');

export const db = drizzle(sqlite, { schema });

// migrate(db, { migrationsFolder: './drizzle' });
