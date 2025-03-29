import { FastifyInstance } from 'fastify';
import getAllTeams from './team.repository';

export default async function (fastify: FastifyInstance) {
    fastify.get('/teams', async (request, reply) => {
        try {
            const teams = await getAllTeams();
            reply.send(teams);
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: 'Failed to fetch teams' });
        }
    });
}
