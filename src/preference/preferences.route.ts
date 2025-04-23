import { FastifyInstance } from "fastify";
import { createUserPreferencesSchema } from "./preferences.schema";
import {
  createUserPreferencesHandler,
  getUserPreferencesByUserHandler,
} from "./preferences.controller";
import { authorizeRole } from "../middleware/authorizeRole";
import { CreateUserPreferenceRoute } from "./preferences.type";

export async function preferencesRoutes(fastify: FastifyInstance) {
  fastify.post<CreateUserPreferenceRoute>(
      "/preferences",
      { preHandler: authorizeRole(['user','admin']), schema: createUserPreferencesSchema },
      createUserPreferencesHandler
    );
    fastify.get(
      "/preferences",
      {preHandler: authorizeRole(['user','admin'])},
      getUserPreferencesByUserHandler
    );
  }