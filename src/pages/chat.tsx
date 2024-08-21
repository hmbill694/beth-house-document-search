import ChatArea from "../components/chat/ChatArea";
import { BaseHtml } from "../components/ui/base";
import Drawer from "../components/ui/Drawer";
import DrawerToggle from "../components/ui/DrawerToggle";
import NavItem from "../components/ui/NavItem";
import { createController } from "../controllers/_utils";

export const chat = createController({ prefix: "/chat" })
  .get("/", async ({ htmlStream, session, db }) => {

    const chats = [{ id: "1", sender: "user", content: "Hello" }, { id: "1", sender: "system", content: "Hey how goes it" }]
    const drawerId = "chat-drawer"
    return htmlStream(() => (
      <BaseHtml
        navStart={<>
          <NavItem href="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
          </NavItem>
          <NavItem>
            <DrawerToggle id={drawerId} classes="drawer-button" />
          </NavItem>
        </>
        }
      >
        <Drawer
          id={drawerId}
          drawerOptions={[{ content: "hello", href: "/chat" }]}
        >
          <ChatArea chats={chats} />
        </Drawer>
      </BaseHtml>
    ));
  });