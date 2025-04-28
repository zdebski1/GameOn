import { FastifyInstance } from "fastify";
import { createPreferencesSchema } from "./schema";
import {
  CreatePreferencesController,
  GetPreferencesByUserController,
} from "./controller";
import { authorizeRole } from "../middleware/authorizeRole";
import { CreatePreferenceRoute } from "./type";

export async function preferencesRoutes(fastify: FastifyInstance) {
  fastify.post<CreatePreferenceRoute>(
      "/user/preferences",
      { preHandler: authorizeRole(['user','admin']), schema: createPreferencesSchema },
      CreatePreferencesController
    );
    fastify.get(
      "/user/preferences",
      {preHandler: authorizeRole(['user','admin'])},
      GetPreferencesByUserController
    );
  }