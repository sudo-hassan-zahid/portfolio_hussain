import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

let client: ReturnType<typeof postgres> | undefined;
let database: ReturnType<typeof drizzle<typeof schema>> | undefined;

export function getDatabaseUrl() {
  return process.env.SUPABASE_DATABASE_URL ?? process.env.POSTGRES_URL ?? process.env.DATABASE_URL;
}

export function hasDatabase() {
  return Boolean(getDatabaseUrl());
}

export function db() {
  const connectionString = getDatabaseUrl();

  if (!connectionString) {
    throw new Error("Missing SUPABASE_DATABASE_URL, POSTGRES_URL, or DATABASE_URL.");
  }

  if (!client) {
    client = postgres(connectionString, { max: 3, prepare: false });
  }

  if (!database) {
    database = drizzle(client, { schema });
  }

  return database;
}
