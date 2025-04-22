import { FastifyInstance } from 'fastify';
import { createTeamHandler, getAllTeamsHandler } from './team.controller';
import { createTeamSchema } from './team.schema';

export default async function (fastify: FastifyInstance) {
    fastify.get('/teams/:userId', getAllTeamsHandler);
    fastify.post('/teams/:userId', { schema: createTeamSchema }, createTeamHandler);
}