CREATE TABLE document (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  updated_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP NOT NULL
);
CREATE INDEX idx_documents_id_created_at ON document (created_at, id);
CREATE TABLE document_chunk (
  id TEXT PRIMARY KEY,
  content TEXT NOT NULL,
  embedding F32_BLOB(1536) NOT NULL,
  document_id TEXT NOT NULL,
  chunk_number INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL FOREIGN KEY (document_id) REFERENCES document(id)
);
CREATE INDEX idx_document_chunk_id_created_at ON document_chunk (created_at, id);
CREATE TABLE conversation (
  id TEXT PRIMARY KEY,
  chat_title TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL
);
CREATE INDEX idx_conversation_id_created_at ON conversation (id, created_at);
CREATE TABLE chat_message (
  id TEXT PRIMARY KEY,
  content TEXT NOT NULL,
  sender TEXT NOT NULL,
  chat_id TEXT NOT NULL,
  sent_at TIMESTAMP NOT NULL,
  FOREIGN KEY (chat_id) REFERENCES conversation(id)
);
CREATE INDEX idx_chat_message_id_sent_at ON chat_message (sent_at, id);