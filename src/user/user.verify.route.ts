import { FastifyInstance } from "fastify";
import {
  createSendUserEmailVerificationHandler,
  createUserEmailVerifyHandler,
} from "./user.verify.controller";
import {
  createUserEmailVerificationSchema,
  createUserSendEmailVerificationSchema,
} from "./user.verify.schema";
import {
  CreateSendEmailVerifyRoute,
  CreateUserVerifyRoute,
} from "./user.verify.type";

export async function userVerifyRoutes(fastify: FastifyInstance) {
  fastify.post<CreateUserVerifyRoute>(
    "/users/verify",
    {
      schema: createUserEmailVerificationSchema,
    },
    createUserEmailVerifyHandler
  );
  fastify.post<CreateSendEmailVerifyRoute>(
    "/users/verify-send",
    {
      schema: createUserSendEmailVerificationSchema,
    },
    createSendUserEmailVerificationHandler
  );
}
