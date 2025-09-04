import { PrismaClient } from "@prisma/client";

import { env } from "~/env";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db = globalForDb.prisma ?? new PrismaClient();

if (env.NODE_ENV !== "production") globalForDb.prisma = db;
