import Elysia from "elysia";
import { authGroup } from "./(auth)/*";
import { index } from "./index";
import { documents } from "./documents";
import { document } from "./document";
import { chat } from "./chat";

export const pages = new Elysia()
  .use(authGroup)
  .use(index)
  .use(documents)
  .use(document)
  .use(chat)
