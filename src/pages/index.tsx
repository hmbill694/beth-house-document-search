import DocumentDisplay from "../components/documents/DocumentDisplay";
import { BaseHtml } from "../components/ui/base";
import { createController } from "../controllers/_utils";

export const index = createController()
  .get("/", async ({ htmlStream, session, db }) => {


    return htmlStream(() => (
      <BaseHtml>
        <DocumentDisplay />
      </BaseHtml>
    ));
  });
