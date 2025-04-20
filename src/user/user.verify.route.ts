import { FastifyInstance } from "fastify";
import { createUserEmailVerifyHandler } from "./user.verify.controller";
import { createUserEmailVerificationSchema } from "./user.verify.schema";

export async function userVerifyRoutes(fastify:FastifyInstance) {
    fastify.post('/users/:userId/verify',{schema: createUserEmailVerificationSchema},createUserEmailVerifyHandler);
}