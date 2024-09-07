import Elysia from "elysia";
import { authGroup } from "./(auth)/*";
import { chat } from "./chat";
import { document } from "./document";
import { index } from "./index";

export const pages = new Elysia()
  .use(authGroup)
  .use(index)
  .use(document)
  .use(chat);
