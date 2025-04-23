import { FastifyInstance } from "fastify";
import { createPreferencesSchema } from "./preferences.schema";
import {
  createPreferencesHandler,
  getPreferencesByUserHandler,
} from "./preferences.controller";
import { authorizeRole } from "../middleware/authorizeRole";
import { CreatePreferenceRoute } from "./preferences.type";

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