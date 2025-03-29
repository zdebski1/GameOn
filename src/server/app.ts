import Fastify from 'fastify';
import availabilityRoutes from '../availability/route';
import teamRoutes from '../team/route';

const fastify = Fastify({ logger: true });

fastify.register(availabilityRoutes);
fastify.register(teamRoutes);

export default fastify;
