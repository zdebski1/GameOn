import { FastifyInstance } from "fastify";
import {
  CreateUserEmailVerificationsController,
  UpdateEmailVerificationsController,
} from "./controller";
import {
  createEmailVerificationSchema,
  updateEmailVerificationSchema,
} from "./schema";
import {
  CreateEmailVerifyRoute,
  UpdateVerifyRoute,
} from "./type";

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
