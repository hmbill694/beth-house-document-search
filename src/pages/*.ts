import Elysia from "elysia";
import { authGroup } from "./(auth)/*";
import { index } from "./index";
import { documents } from "./documents";
import { document } from "./document";

export const pages = new Elysia().use(index).use(authGroup).use(documents).use(document);
