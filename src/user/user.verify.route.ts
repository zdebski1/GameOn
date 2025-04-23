import { FastifyInstance } from "fastify";
import {
  createResendUserEmailVerificationHandler,
  createUserEmailVerifyHandler,
} from "./user.verify.controller";
import { createUserEmailVerificationSchema } from "./user.verify.schema";
import { authorizeRole } from "../middleware/authorizeRole";
import { CreateUserVerifyRoute } from "./user.verify.type";

export async function userVerifyRoutes(fastify: FastifyInstance) {
  fastify.post<CreateUserVerifyRoute>(
    "/users/verify",
    {
      preHandler: authorizeRole(["user", "admin"]),
      schema: createUserEmailVerificationSchema,
    },
    createUserEmailVerifyHandler
  );
  fastify.post<CreateUserVerifyRoute>(
    "/users/verify-resend",
    { preHandler: authorizeRole(["user", "admin"]) },
    createResendUserEmailVerificationHandler
  );
}
