import { FastifyInstance } from "fastify";
import { createTeamHandler, getAllTeamsHandler } from "./team.controller";
import { createTeamSchema } from "./team.schema";
import { authorizeRole } from "../middleware/authorizeRole";
import { CreateTeamRoute } from "./team.type";

export default async function (fastify: FastifyInstance) {
    fastify.get("/teams", { preHandler: authorizeRole(['user', 'admin']) } , getAllTeamsHandler);
    fastify.post<CreateTeamRoute>("/teams", { preHandler: authorizeRole(['user', 'admin']), schema: createTeamSchema }, createTeamHandler);
};
