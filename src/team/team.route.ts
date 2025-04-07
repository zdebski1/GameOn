import { FastifyInstance } from 'fastify';
import { createTeamHandler, getAllTeamsHandler } from './team.controller';

export default async function (fastify: FastifyInstance) {
    fastify.get('/teams', getAllTeamsHandler);

    fastify.post('/teams', createTeamHandler);
}