import { FastifyInstance } from "fastify";
import { createUserPreferencesSchema } from "./user.preferences.schema";
import {
  createUserPreferencesHandler,
  getUserPreferencesByUserHandler,
} from "./user.preferences.controller";
import { authorizeRole } from "../middleware/authorizeRole";
import { CreateUserPreferenceRoute } from "./user.preferences.type";

export async function userPreferencesRoutes(fastify: FastifyInstance) {
  fastify.post<CreateUserPreferenceRoute>(
      "/users/preferences",
      { preHandler: authorizeRole(['user','admin']), schema: createUserPreferencesSchema },
      createUserPreferencesHandler
    );
    fastify.get(
      "/users/preferences",
      {preHandler: authorizeRole(['user','admin'])},
      getUserPreferencesByUserHandler
    );
  }