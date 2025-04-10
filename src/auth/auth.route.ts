import { FastifyInstance } from "fastify";
import { loginSchema } from "./auth.schema";
import { loginController } from "./auth.controller";

export async function authRoutes (fastify: FastifyInstance) {
    fastify.post('/auth/login', {schema: loginSchema} ,loginController);
} 