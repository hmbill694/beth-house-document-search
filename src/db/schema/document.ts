import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const document = sqliteTable("document",
  {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    description: text("content").notNull(),
    author: text("author"),
    userId: text("user_id").notNull(),
    createdAt: integer("createdAt", { mode: "timestamp" })
      .notNull()
      .$defaultFn(() => new Date()),
  },
  (table) => {
    return {
      createdAtIdx: index("created_at_idx").on(table.createdAt),
      userIdIdx: index("document_user_id_idx").on(table.userId)
    }
  }
)