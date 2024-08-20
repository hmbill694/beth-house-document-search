import ChatArea from "../components/chat/ChatArea";
import DocumentDisplay from "../components/documents/DocumentDisplay";
import { BaseHtml } from "../components/ui/base";
import { createController } from "../controllers/_utils";

export const documents = createController({ prefix: "/documents" })
  .get("/", async ({ htmlStream, session, db }) => {

    return htmlStream(() => (
      <BaseHtml>
        <DocumentDisplay />
      </BaseHtml>
    ));
  });