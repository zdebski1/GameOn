import { FastifyInstance } from 'fastify';
import getAllAvailabilities from './availability.repository';

export default async function (fastify: FastifyInstance) {
    fastify.get('/availabilities', async (request, reply) => {
        try {
            const availabilities = await getAllAvailabilities();
            reply.send(availabilities);
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: 'Failed to fetch availabilities' });
        }
    });
}
