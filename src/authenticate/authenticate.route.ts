import { FastifyInstance } from "fastify";
import { AuthenticateSchema } from "./authenticate.schema";
import { AuthenticateController } from "./authenticate.controller";

export async function authRoutes(fastify: FastifyInstance) {
  fastify.post("/authenticate", { schema: AuthenticateSchema }, AuthenticateController);
}
