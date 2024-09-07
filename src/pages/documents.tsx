import { Optional } from "@sinclair/typebox";
import Elysia, { t } from "elysia";
import DocumentDisplay from "../components/documents/DocumentDisplay";
import { BaseHtml } from "../components/ui/base";
import { createController } from "../controllers/_utils";
import * as docService from "../service/documentService";

const documentsModel = new Elysia({ name: "Modal.documents" }).model({
  update: t.Object({
    id: t.String(),
    description: t.String(),
    title: t.String(),
  }),
});

export const documents = createController({ prefix: "/documents" })
  .use(documentsModel)
  .get("/", async ({ htmlStream, session, db }) => {
    return htmlStream(() => (
      <BaseHtml>
        <DocumentDisplay />
      </BaseHtml>
    ));
  })
  .get("/", async ({ htmlStream, session, db }) => {
    return htmlStream(() => (
      <BaseHtml>
        <DocumentDisplay />
      </BaseHtml>
    ));
  })
  .post(
    "/actions/create-document",
    async ({ html, session, db, body }) => {
      const updatedDocument = docService.updateDocument({
        db,
        updatedDocument: body,
      });

      return html(() => <h1>foo</h1>)
    },
    {
      body: "update",
    },
  );
