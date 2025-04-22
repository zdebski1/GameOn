import { FastifyInstance } from "fastify";
import { createUserPreferencesSchema } from "./user.preferences.schema";
import {
  createUserPreferencesHandler,
  getUserPreferencesByUserHandler,
} from "./user.preferences.controller";

export async function userPreferencesRoutes(fastify: FastifyInstance) {
  fastify.register(async (userScope) => {
    userScope.addHook("preHandler", async (request) => {
      await request.jwtVerify();
    });

    userScope.post(
      "/users/preferences",
      { schema: createUserPreferencesSchema },
      createUserPreferencesHandler
    );
    userScope.get(
      "/users/preferences",
      getUserPreferencesByUserHandler
    );
  });
}
