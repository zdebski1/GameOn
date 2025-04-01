import { FastifyInstance } from 'fastify';
import getAllTeamMembers from './teamMember.repository';

export default async function (fastify: FastifyInstance) {
    fastify.get('/teamMembers', async (request, reply) => {
        try {
            const teamMembers = await getAllTeamMembers();
            reply.send(teamMembers);
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: 'Failed to fetch team members.' });
        }
    });
}
