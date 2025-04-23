import Fastify from "fastify";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import ajvErrors from "ajv-errors";
import availabilityRoutes from "../availability/availability.route";
import teamRoutes from "../team/team.route";
import teamMemberRoutes from "../teamMember/teamMember.route";
import { userRoutes } from "../user/user.route";
import { authRoutes } from "../auth/auth.route";

import cors from "@fastify/cors";
import { preferencesRoutes } from "../preference/preference.route";
import { verificationRoutes } from "../verification/verification.route";
import fastifyJwt from '@fastify/jwt';


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

fastify.register(fastifyJwt, {
  secret: process.env.JWT_SECRET!
});

fastify.register(availabilityRoutes);
fastify.register(teamRoutes);
fastify.register(teamMemberRoutes);
fastify.register(userRoutes);
fastify.register(authRoutes);
fastify.register(preferencesRoutes);
fastify.register(verificationRoutes);

export default fastify;
