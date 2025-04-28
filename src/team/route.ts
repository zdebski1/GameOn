import { FastifyInstance } from "fastify";
import { CreateTeamsController, GetTeamsController } from "./controller";
import { createTeamSchema } from "./schema";
import { authorizeRole } from "../middleware/authorizeRole";
import { CreateTeamRoute } from "./type";

export default async function (fastify: FastifyInstance) {
    fastify.get("/teams", { preHandler: authorizeRole(['user', 'admin']) } , GetTeamsController);
    fastify.post<CreateTeamRoute>("/teams", { preHandler: authorizeRole(['user', 'admin']), schema: createTeamSchema }, CreateTeamsController);
};
