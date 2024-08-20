import { eq } from "drizzle-orm";
import { ctx } from "../context";
import { tweets } from "../db/schema/tweets";
import { createController } from "./_utils";

const homeController = createController({
  prefix: "/chats"
})

homeController.get("/", () => {
  return { hello: "world" }
})


export default homeController;