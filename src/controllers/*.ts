import Elysia from "elysia";
import { authController } from "./auth";
import homeController from "./documents";

export const api = new Elysia({
  prefix: "/api",
})
  .use(authController)
