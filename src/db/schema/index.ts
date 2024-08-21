import { relations } from "drizzle-orm";
import { user } from "./auth";
import { document } from "./document";

export { key, session, user } from "./auth";

export const userRelations = relations(user, ({ many }) => ({
  documents: many(document)
}));


export const documentRelations = relations(document, ({ one }) => ({
  author: one(user, {
    fields: [document.author],
    references: [user.id],
  }),
}));