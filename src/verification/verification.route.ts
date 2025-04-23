import { FastifyInstance } from "fastify";
import {
  CreateUserEmailVerificationsController,
  UpdateEmailVerificationsController,
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
    UpdateEmailVerificationsController
  );
  fastify.post<CreateEmailVerifyRoute>(
    "/verifications",
    {
      schema: createEmailVerificationSchema,
    },
    CreateUserEmailVerificationsController
  );
}
