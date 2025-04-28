import { FastifyInstance } from "fastify";
import { CreateUsersController } from "./controller";
import { createUserSchema } from "./schema";

export async function userRoutes(fastify: FastifyInstance) {
  fastify.post("/users", { schema: createUserSchema }, CreateUsersController);
}
