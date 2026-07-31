import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis;

let db;

if (!globalForPrisma.prisma) {
  const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:12345678@localhost:5432/infotech_db?schema=public';
  
  // We use URL to ensure it parses properly before passing to pg to avoid any weird destructuring errors from pg-connection-string
  const url = new URL(connectionString);
  const pool = new Pool({
    connectionString: url.toString(),
  });
  const adapter = new PrismaPg(pool);
  db = new PrismaClient({ adapter });
  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;
} else {
  db = globalForPrisma.prisma;
}

export { db };
