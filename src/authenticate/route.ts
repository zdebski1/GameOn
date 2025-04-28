import { FastifyInstance } from "fastify";
import { AuthenticateSchema } from "./schema";
import { AuthenticateController } from "./controller";

export async function authRoutes(fastify: FastifyInstance) {
  fastify.post("/authenticate", { schema: AuthenticateSchema }, AuthenticateController);
}
