import Elysia from "elysia";
import { authController } from "./auth";
import homeController from "./home";

export const api = new Elysia({
  prefix: "/api",
})
  .use(authController)
  .use(homeController);
