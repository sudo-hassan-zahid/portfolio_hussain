import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

const timestamps = {
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
};

export const heroImages = pgTable("hero_images", {
  id: serial("id").primaryKey(),
  imageUrl: text("image_url").notNull(),
  alt: text("alt").notNull(),
  captionName: varchar("caption_name", { length: 160 }).notNull(),
  captionTitle: varchar("caption_title", { length: 160 }).notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  sortOrder: integer("sort_order").default(0).notNull(),
  ...timestamps,
});

export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  period: varchar("period", { length: 120 }).notNull(),
  role: varchar("role", { length: 180 }).notNull(),
  firm: varchar("firm", { length: 180 }).notNull(),
  description: text("description").notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  sortOrder: integer("sort_order").default(0).notNull(),
  ...timestamps,
});

export const educations = pgTable("educations", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 220 }).notNull(),
  issuer: varchar("issuer", { length: 220 }).notNull(),
  year: varchar("year", { length: 80 }).notNull(),
  detail: varchar("detail", { length: 120 }).notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  sortOrder: integer("sort_order").default(0).notNull(),
  ...timestamps,
});

export const certifications = pgTable("certifications", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 220 }).notNull(),
  issuer: varchar("issuer", { length: 220 }).notNull(),
  year: varchar("year", { length: 80 }).notNull(),
  detail: varchar("detail", { length: 120 }).notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  sortOrder: integer("sort_order").default(0).notNull(),
  ...timestamps,
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  quote: text("quote").notNull(),
  author: varchar("author", { length: 180 }).notNull(),
  title: varchar("title", { length: 220 }).notNull(),
  rating: integer("rating").default(5).notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  sortOrder: integer("sort_order").default(0).notNull(),
  ...timestamps,
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 180 }).notNull(),
  email: varchar("email", { length: 220 }).notNull(),
  phone: varchar("phone", { length: 80 }).notNull(),
  caseType: varchar("case_type", { length: 180 }).notNull(),
  message: text("message").notNull(),
  notificationStatus: varchar("notification_status", { length: 80 }).default("pending").notNull(),
  notificationError: text("notification_error"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export type HeroImage = typeof heroImages.$inferSelect;
export type Experience = typeof experiences.$inferSelect;
export type Education = typeof educations.$inferSelect;
export type Certification = typeof certifications.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;
