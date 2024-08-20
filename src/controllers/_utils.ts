import Elysia from "elysia";
import { ctx } from "../context";

export function createController(config: ConstructorParameters<typeof Elysia>[0] = {}) {
  return new Elysia(config)
    .use(ctx)
    .derive(async (ctx) => {
      const authRequest = ctx.auth.handleRequest(ctx);
      const session = await authRequest.validate();

      return { session };
    })
}