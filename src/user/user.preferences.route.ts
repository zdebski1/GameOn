import { FastifyInstance } from 'fastify';
import { createUserPreferencesSchema } from './user.preferences.schema';
import { createUserPreferencesHandler, getUserPreferencesByUserHandler } from './user.preferences.controller';

export async function userPreferencesRoutes(fastify: FastifyInstance) {
  fastify.post('/users/:userId/preferences', {schema: createUserPreferencesSchema}, createUserPreferencesHandler );
  fastify.get('/users/:userId/preferences', getUserPreferencesByUserHandler );
}