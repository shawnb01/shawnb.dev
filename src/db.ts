// src/db.ts
import { PrismaClient } from "@prisma/client";

// This is an alternative database client that you can use
// for different contexts (like edge functions)
export const db = new PrismaClient();
