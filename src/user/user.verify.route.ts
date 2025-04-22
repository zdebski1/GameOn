import { FastifyInstance } from "fastify";
import { createResendUserEmailVerificationHandler, createUserEmailVerifyHandler } from "./user.verify.controller";
import { createUserEmailVerificationSchema, resendUserEmailVerificationSchema } from "./user.verify.schema";

export async function userVerifyRoutes(fastify: FastifyInstance) {
    fastify.post('/users/:userId/verify', { schema: createUserEmailVerificationSchema }, createUserEmailVerifyHandler);
    fastify.post('/users/:userId/verify-resend', { schema: resendUserEmailVerificationSchema }, createResendUserEmailVerificationHandler);
}