import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

// Define the contact table schema
export const contact = pgTable('contact', {
  id: serial('id').primaryKey(),
  firstName: varchar('first_name', { length: 255 }).notNull(),
  lastName: varchar('last_name', { length: 255 }).notNull(),
  phoneNumber: varchar('phone_number', { length: 20 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  type: varchar('type', { length: 50 }).notNull(),
  bio: text('bio').notNull(),
  createdAt: timestamp('created_at').defaultNow(),});


export const db = drizzle(sql);

