// Import necessary modules from Drizzle ORM and PostgreSQL
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  integer,
  date,
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
  createdAt: timestamp('created_at').defaultNow(),
});

// Define the coworking bookings table schema
export const coworkingBookings = pgTable('coworking_bookings', {
  id: serial('id').primaryKey(),
  firstName: varchar('first_name', { length: 100 }).notNull(),
  lastName: varchar('last_name', { length: 100 }).notNull(),
  phoneNumber: varchar('phone_number', { length: 15 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  location: varchar('location', { length: 100 }).notNull(),
  numOfPeople: integer('num_of_people').notNull(),
  shift: varchar('shift', { length: 10 }).notNull(),
  ac: varchar('ac', { length: 10 }).notNull(),
  startTime: date('start_time').notNull(),
  endTime: date('end_time').notNull(),
  budget: varchar('budget', { length: 20 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const instituteService  = pgTable("institute_service", {
  id: serial("id").primaryKey(), // Auto-incrementing ID
  firstName: varchar("first_name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
  phoneNumber: varchar("phone_number", { length: 15 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  location: varchar("location", { length: 100 }).notNull(),
  area: varchar("area", { length: 255 }).notNull(),
  cnic: varchar("cnic", { length: 15 }).default(null), // Optional field, defaults to null
  timing: varchar("timing", { length: 50 }).notNull(),
  feedback: text("feedback").notNull(),
  course: varchar("course", { length: 100 }).notNull(), // IT Course
});


export const db = drizzle(sql);
