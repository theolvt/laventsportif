import { pgTable, integer, uuid, timestamp, primaryKey, varchar } from "drizzle-orm/pg-core";

export const adventProgress = pgTable("advent_calendar_progress", {
    // If your auth provider uses UUIDs (like Supabase or standard Postgres auth), use uuid.
    // If using generic strings (like Auth.js / Clerk with some adapters), change to varchar.
    // Generic implementation uses varchar to be safe with most providers.
    userId: varchar("user_id").notNull(),
    dayNumber: integer("day_number").notNull(),
    year: integer("year").notNull(),
    completedAt: timestamp("completed_at").defaultNow(),
}, (table) => {
    return {
        pk: primaryKey({ columns: [table.userId, table.dayNumber, table.year] }),
    };
});
