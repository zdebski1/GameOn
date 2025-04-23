import { FastifyInstance } from "fastify";
import { CreateUsersController } from "./user.controller";
import { createUserSchema } from "./user.schema";

export async function userRoutes(fastify: FastifyInstance) {
  fastify.post("/users", { schema: createUserSchema }, CreateUsersController);
}
