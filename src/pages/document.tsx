import Elysia, { t } from "elysia";
import AddDocument from "../components/document/AddDocument";
import DocumentDetails from "../components/document/DocumentDetails";
import { BaseHtml } from "../components/ui/base";
import { createController } from "../controllers/_utils";
import * as docService from "../service/documentService";

const documentModal = new Elysia({ name: "document.modal" }).model({
  add: t.Object({
    title: t.String(),
    description: t.String(),
  }),
});

export const document = createController({ prefix: "/document" })
  .use(documentModal)
  .get("/:id", async ({ htmlStream, session, db }) => {
    return htmlStream(() => (
      <BaseHtml>
        <DocumentDetails />
      </BaseHtml>
    ));
  })
  .get("/add", async ({ htmlStream }) => {
    return htmlStream(() => (
      <BaseHtml>
        <AddDocument />
      </BaseHtml>
    ));
  })
  .post(
    "/action/add",
    async ({ html, db, body }) => {
      const newDocument = await docService.createDocument({ db, doc: body });

      return redirect("/");
    },
    { body: "add" },
  );
