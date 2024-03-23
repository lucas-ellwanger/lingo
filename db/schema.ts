import { relations } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const courses = sqliteTable("courses", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  imageSrc: text("image_src").notNull(),
});

export const coursesRelations = relations(courses, ({ many }) => ({
  userProgress: many(userProgress),
}));

export const userProgress = sqliteTable("user_progress", {
  userId: text("user_id").primaryKey(),
  userName: text("user_name").notNull().default("User"),
  userImageSrc: text("user_image_src").notNull().default("/mascot.svg"),
  activeCourseId: integer("active_course_id").references(() => courses.id, {
    onDelete: "cascade",
  }),
  hearts: integer("hearts").notNull().default(5),
  points: integer("points").notNull().default(0),
});

export const userProgressRelations = relations(userProgress, ({ one }) => ({
  activeCourse: one(courses, {
    fields: [userProgress.activeCourseId],
    references: [courses.id],
  }),
}));

export type Course = typeof courses.$inferSelect;
export type UserProgress = typeof userProgress.$inferSelect;
