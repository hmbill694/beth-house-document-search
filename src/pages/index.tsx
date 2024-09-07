import DocumentDisplay from "../components/documents/DocumentDisplay";
import { BaseHtml } from "../components/ui/base";
import { createController } from "../controllers/_utils";
import { getDocuments } from "../service/documentService";

export const index = createController().get(
  "/",
  async ({ htmlStream, session, db }) => {

    const documents = await getDocuments({ db })

    return htmlStream(() => (
      <BaseHtml>
        <DocumentDisplay />
      </BaseHtml>
    ));
  },
);
