import { FastifyInstance } from "fastify";
import {
  createTeamMemberHandler,
  getAllTeamMembersHandler,
} from "./teamMember.controller";
import { createTeamMemberSchema } from "./teamMember.schema";
import { authorizeRole } from "../middleware/authorizeRole";
import { CreateTeamMemberRoute, GetAllTeamMembersRoute } from "./teamMember.type";

export default async function (fastify: FastifyInstance) {
  fastify.get<GetAllTeamMembersRoute>("/teams/:teamId/members", 
    { preHandler: authorizeRole(['user', 'admin']) }, 
    getAllTeamMembersHandler);

  fastify.post<CreateTeamMemberRoute>(
    "/teams/:teamId/members",
    { preHandler: authorizeRole(['user', 'admin']) , schema: createTeamMemberSchema },
    createTeamMemberHandler
  )};