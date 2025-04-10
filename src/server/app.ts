import Fastify from 'fastify';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import ajvErrors from 'ajv-errors';
import availabilityRoutes from '../availability/availability.route';
import teamRoutes from '../team/team.route';
import teamMemberRoutes from '../team/teamMember.route';
import { userRoutes } from '../user/user.route';
import { authRoutes } from '../auth/auth.route';

import cors from '@fastify/cors';

const fastify = Fastify({ logger: true });

fastify.register(cors, {
    origin: true,
  });

  fastify.setValidatorCompiler(({ schema }) => {
    const ajv = new Ajv({ allErrors: true });
    addFormats(ajv);
    ajvErrors(ajv);
    return ajv.compile(schema);
  });

fastify.register(availabilityRoutes);
fastify.register(teamRoutes);
fastify.register(teamMemberRoutes);
fastify.register(userRoutes);
fastify.register(authRoutes);

export default fastify;
