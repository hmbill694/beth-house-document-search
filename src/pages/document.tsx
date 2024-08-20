import DocumentDetails from "../components/document/DocumentDetails";
import { BaseHtml } from "../components/ui/base";
import { createController } from "../controllers/_utils";

export const document = createController({ prefix: "/document" })
  .get("/:id", async ({ htmlStream, session, db }) => {

    return htmlStream(() => (
      <BaseHtml>
        <DocumentDetails />
      </BaseHtml>
    ));
  });