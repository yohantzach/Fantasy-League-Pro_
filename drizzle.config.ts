import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set. Ensure the database is provisioned and the .env file is loaded.");
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
