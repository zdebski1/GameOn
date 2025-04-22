import { FastifyInstance } from "fastify";
import {
  createResendUserEmailVerificationHandler,
  createUserEmailVerifyHandler,
} from "./user.verify.controller";
import {
  createUserEmailVerificationSchema
} from "./user.verify.schema";

export async function userVerifyRoutes(fastify: FastifyInstance) {
  fastify.register(async (userScope) => {
    userScope.addHook("preHandler", async (request) => {
      await request.jwtVerify();
    });

    userScope.post(
      "/users/verify",
      { schema: createUserEmailVerificationSchema },
      createUserEmailVerifyHandler
    );
    userScope.post(
      "/users/verify-resend",
      createResendUserEmailVerificationHandler
    );
  });
}
