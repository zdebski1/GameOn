import Fastify from 'fastify';
import availabilityRoutes from '../availability/route';
import teamRoutes from '../team/team.route';
import teamMemberRoutes from '../team/teamMember.route';
import { userRoutes } from '../user/user.route';

import cors from '@fastify/cors';

const fastify = Fastify({ logger: true });

fastify.register(cors, {
    origin: true,
  });

fastify.register(availabilityRoutes);
fastify.register(teamRoutes);
fastify.register(teamMemberRoutes);
fastify.register(userRoutes);

export default fastify;
