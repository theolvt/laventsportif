import 'server-only';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Make sure to set DATABASE_URL in your .env.local
// Example: postgres://user:password@host:port/database?sslmode=require

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);
