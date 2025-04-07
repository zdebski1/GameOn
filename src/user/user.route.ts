import { FastifyInstance } from 'fastify';
import { createUserHandler } from './user.controller';

export async function userRoutes(fastify: FastifyInstance) {
  fastify.post('/users', createUserHandler);
}