import { eq, sql } from "drizzle-orm";
import { DBClient } from "../db";
import { document, DocumentInsert, DocumentSelect } from "../db/schema";
import { Result } from "../util/result";

export type RepoArgs = { db: DBClient };

export async function getDocumentById({
  db,
  id,
}: RepoArgs & { id: string }): Promise<Result<DocumentSelect>> {
  const desiredDocument = await db
    .select()
    .from(document)
    .where(eq(document.id, id));

  if (desiredDocument.length === 0) {
    return {
      success: true,
      error: `Document with ID of ${id} does not exist.`,
    };
  }

  if (desiredDocument.length > 1) {
    return { success: false, error: `Found two documents with this ID ${id}` };
  }

  return { success: true, data: desiredDocument.at(0)!! };
}

export async function getAllDocuments({ db }: RepoArgs) {
  const documents = await db
    .select()
    .from(document)
    .orderBy(document.createdAt);

  return { success: true, data: documents };
}

export async function updateDocumentById({
  db,
  updatedDocument,
}: {
  db: DBClient;
  updatedDocument: DocumentInsert;
}) {
  const result = await db
    .update(document)
    .set({
      description: updatedDocument.description ?? "",
      title: updatedDocument.title,
      updatedAt: sql`NOW()`,
    })
    .returning();

  return { success: true, data: result.at(0)!! };
}

export async function deleteDocumentWithId({
  db,
  id,
}: RepoArgs & { id: string }): Promise<Result<DocumentSelect>> {
  const documents = await db.select().from(document).where(eq(document.id, id));

  if (documents.length === 0) {
    return {
      success: false,
      error: `Document with ID of ${id} does not exist.`,
    };
  }

  try {
    await db.delete(document).where(eq(document.id, id));
    return { success: true, data: documents.at(0)!! };
  } catch (e: any) {
    return { success: false, error: e.message };
  }
}
