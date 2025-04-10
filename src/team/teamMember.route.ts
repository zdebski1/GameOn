import { FastifyInstance } from 'fastify';
import { createTeamMemberHandler, getAllTeamMembersHandler } from './teamMember.controller';
import { createTeamMemberSchema } from './teamMember.schema';

export default async function (fastify: FastifyInstance) {
    fastify.get('/teams/:teamId/members', getAllTeamMembersHandler);
    fastify.post('/teams/:teamId/members', {schema: createTeamMemberSchema},createTeamMemberHandler);
}