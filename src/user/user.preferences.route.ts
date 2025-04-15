import { FastifyInstance } from 'fastify';
import { createUserPreferencesSchema } from './user.preferences.schema';
import { createUserPreferencesHandler } from './user.preferences.controller';

export async function userPreferencesRoutes(fastify: FastifyInstance) {
  fastify.post('/users/:userId/preferences', {schema: createUserPreferencesSchema}, createUserPreferencesHandler );
}