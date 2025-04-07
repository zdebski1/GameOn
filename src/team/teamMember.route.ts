import { FastifyInstance } from 'fastify';
import { getAllTeamMembers, getTeamMembersByTeamId } from './teamMember.repository';

export default async function (fastify: FastifyInstance) {
    fastify.get('/teamMembers', async (request, reply) => {
        try {
            const teamMembers = await getAllTeamMembers();
            reply.send(teamMembers);
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error});
        }
    });

    fastify.get('/teams/:teamId/members', async (request, reply) => {
        const { teamId } = request.params as { teamId: string };

        try {
            const teamMembers = await getTeamMembersByTeamId(teamId);
            reply.send(teamMembers);
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: `Failed to fetch members for team ${teamId}.` });
        }
    });     
}