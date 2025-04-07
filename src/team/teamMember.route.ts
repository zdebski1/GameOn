import { FastifyInstance } from 'fastify';
import { getAllTeamMembersHandler } from './teamMember.controller';

export default async function (fastify: FastifyInstance) {
    fastify.get('/teams/:teamId/members', getAllTeamMembersHandler);
}