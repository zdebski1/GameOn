import { FastifyInstance } from "fastify";
import {
  createTeamMemberHandler,
  getAllTeamMembersHandler,
} from "./teamMember.controller";
import { createTeamMemberSchema } from "./teamMember.schema";

export default async function (fastify: FastifyInstance) {
  fastify.register(async (teamScope) => {
    teamScope.addHook("preHandler", async (request) => {
      await request.jwtVerify();
    });

  teamScope.get("/teams/:teamId/members", getAllTeamMembersHandler);
  teamScope.post(
    "/teams/:teamId/members",
    { schema: createTeamMemberSchema },
    createTeamMemberHandler
  )});
}
