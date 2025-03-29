import Fastify from 'fastify';
import availabilityRoutes from '../availability/route';

const fastify = Fastify({ logger: true });

fastify.register(availabilityRoutes);

export default fastify;
