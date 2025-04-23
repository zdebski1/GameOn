import { FastifyInstance } from "fastify";
import { CreateTeamsController, GetTeamsController } from "./team.controller";
import { createTeamSchema } from "./team.schema";
import { authorizeRole } from "../middleware/authorizeRole";
import { CreateTeamRoute } from "./team.type";

export default async function (fastify: FastifyInstance) {
    fastify.get("/teams", { preHandler: authorizeRole(['user', 'admin']) } , GetTeamsController);
    fastify.post<CreateTeamRoute>("/teams", { preHandler: authorizeRole(['user', 'admin']), schema: createTeamSchema }, CreateTeamsController);
};
