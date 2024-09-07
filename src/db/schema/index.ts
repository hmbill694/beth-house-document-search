import {
  blob,
  index,
  integer,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

// Documents table definition
export const document = sqliteTable(
  "document",
  {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    description: text("description"),
    updatedAt: integer("updated_at", { mode: "timestamp" }),
    createdAt: integer("created_at", { mode: "timestamp" })
      .notNull()
      .$defaultFn(() => new Date()),
  },
  (table) => ({
    idxDocumentsIdCreatedAt: index("idx_documents_id_created_at").on(
      table.createdAt,
      table.id,
    ),
  }),
);

export type DocumentSelect = typeof document.$inferSelect;
export type DocumentInsert = typeof document.$inferInsert;

// Document Chunk table definition
export const documentChunk = sqliteTable(
  "document_chunk",
  {
    id: text("id").primaryKey(),
    content: text("content").notNull(),
    embedding: blob("embedding").notNull(),
    documentId: text("document_id")
      .notNull()
      .references(() => document.id),
    chunkNumber: integer("chunk_number").notNull(),
    createdAt: integer("created_at", { mode: "timestamp" })
      .notNull()
      .$defaultFn(() => new Date()),
  },
  (table) => ({
    idxDocumentChunkIdCreatedAt: index("idx_document_chunk_id_created_at").on(
      table.createdAt,
      table.id,
    ),
  }),
);

export type DocumentChunkSelect = typeof documentChunk.$inferSelect;
export type DocumentChunkInsert = typeof documentChunk.$inferInsert;

// Conversation table definition
export const conversation = sqliteTable(
  "conversation",
  {
    id: text("id").primaryKey(),
    chatTitle: text("chat_title").notNull(),
    createdAt: integer("created_at", { mode: "timestamp" })
      .notNull()
      .$defaultFn(() => new Date()),
  },
  (table) => ({
    idxConversationIdCreatedAt: index("idx_conversation_id_created_at").on(
      table.createdAt,
      table.id,
    ),
  }),
);

export type ConversationSelect = typeof conversation.$inferSelect;
export type ConversationInsert = typeof conversation.$inferInsert;

// Chat Message table definition
export const chatMessage = sqliteTable(
  "chat_message",
  {
    id: text("id").primaryKey(),
    content: text("content").notNull(),
    sender: text("sender").notNull(),
    chatId: text("chat_id")
      .notNull()
      .references(() => conversation.id),
    sentAt: integer("sent_at", { mode: "timestamp" })
      .notNull()
      .$default(() => new Date()),
  },
  (table) => ({
    idxChatMessageSentAtId: index("idx_chat_message_id_sent_at").on(
      table.sentAt,
      table.id,
    ),
  }),
);

export type ChatMessageSelect = typeof chatMessage.$inferSelect;
export type ChatMessageInsert = typeof chatMessage.$inferInsert;
