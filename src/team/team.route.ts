import { FastifyInstance } from "fastify";
import { createTeamHandler, getAllTeamsHandler } from "./team.controller";
import { createTeamSchema } from "./team.schema";

export default async function (fastify: FastifyInstance) {
  fastify.register(async (teamScope) => {
    teamScope.addHook("preHandler", async (request) => {
      await request.jwtVerify();
    });

    teamScope.get("/teams", getAllTeamsHandler);
    teamScope.post("/teams", { schema: createTeamSchema }, createTeamHandler);
  });
}
