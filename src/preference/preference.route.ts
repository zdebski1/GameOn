import { FastifyInstance } from "fastify";
import { createPreferencesSchema } from "./preference.schema";
import {
  createPreferencesHandler,
  getPreferencesByUserHandler,
} from "./preference.controller";
import { authorizeRole } from "../middleware/authorizeRole";
import { CreatePreferenceRoute } from "./preference.type";

export async function preferencesRoutes(fastify: FastifyInstance) {
  fastify.post<CreatePreferenceRoute>(
      "/preferences",
      { preHandler: authorizeRole(['user','admin']), schema: createPreferencesSchema },
      createPreferencesHandler
    );
    fastify.get(
      "/preferences",
      {preHandler: authorizeRole(['user','admin'])},
      getPreferencesByUserHandler
    );
  }