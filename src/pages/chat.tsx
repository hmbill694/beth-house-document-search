import ChatArea from "../components/chat/ChatArea";
import { BaseHtml } from "../components/ui/base";
import Drawer from "../components/ui/Drawer";
import { createController } from "../controllers/_utils";

export const chat = createController({ prefix: "/chat" })
  .get("/", async ({ htmlStream, session, db }) => {

    const chats = [{ id: "1", sender: "user", content: "Hello" }, { id: "1", sender: "system", content: "Hey how goes it" }]
    return htmlStream(() => (
      <BaseHtml>
        <Drawer drawerOptions={[{ href: "/", content: "hello" }]} id="home-page-drawer">
          <ChatArea chats={chats} />
        </Drawer>
      </BaseHtml>
    ));
  });