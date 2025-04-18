import { FastifyInstance } from "fastify";
import { createUserVerifyHandler } from "./user.verify.controller";

export async function userVerifyRoutes(fastify:FastifyInstance) {
    fastify.post('/users/verify', createUserVerifyHandler);
}