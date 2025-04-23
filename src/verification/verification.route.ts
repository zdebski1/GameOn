import { FastifyInstance } from "fastify";
import {
  createUserEmailVerificationHandler,
  updateEmailVerificationHandler,
} from "./verification.controller";
import {
  createEmailVerificationSchema,
  updateEmailVerificationSchema,
} from "./verification.schema";
import {
  CreateEmailVerifyRoute,
  UpdateVerifyRoute,
} from "./verification.type";

export async function verificationRoutes(fastify: FastifyInstance) {
  fastify.put<UpdateVerifyRoute>(
    "/verifications/:emailVerificationCode",
    {
      schema: updateEmailVerificationSchema,
    },
    updateEmailVerificationHandler
  );
  fastify.post<CreateEmailVerifyRoute>(
    "/verifications",
    {
      schema: createEmailVerificationSchema,
    },
    createUserEmailVerificationHandler
  );
}
