import { DBClient } from "../db";
import {
  deleteDocumentWithId,
  getAllDocuments,
  getDocumentById as getDoc,
  updateDocumentById,
} from "../repo/documentRepo";
import { UpdateDocumentRequest } from "../types/modal";

export type ServiceMethodArgs = {
  db: DBClient;
};

export async function getDocuments({ db }: ServiceMethodArgs) {
  const userDocuments = getAllDocuments({ db });

  return userDocuments;
}

export async function getDocumentById({
  db,
  id,
}: ServiceMethodArgs & { id: string }) {
  const result = await getDoc({ db, id });

  if (!result.success) {
    throw new Error(result.error);
  }

  return result.data;
}

export async function deleteDocument({
  db,
  id,
}: ServiceMethodArgs & { id: string }) {
  const result = await deleteDocumentWithId({ db, id });

  if (!result.success) {
    throw new Error(result.error);
  }

  return result.data;
}

export async function updateDocument({
  updatedDocument,
  db,
}: ServiceMethodArgs & {
  updatedDocument: UpdateDocumentRequest;
}) {
  const documentResult = await getDoc({ db, id: updatedDocument.id });

  if (!documentResult.success) {
    throw new Error(documentResult.error);
  }

  const newDocument = { ...documentResult.data, ...updatedDocument };

  await updateDocumentById({ db, updatedDocument: newDocument });
}
