import { FastifyInstance } from "fastify";
import {
  CreateTeamMemberController,
  GetTeamMembersController,
} from "./teamMember.controller";
import { createTeamMemberSchema } from "./teamMember.schema";
import { authorizeRole } from "../middleware/authorizeRole";
import { CreateTeamMemberRoute, GetTeamMembersRoute } from "./teamMember.type";

export default async function (fastify: FastifyInstance) {
  fastify.get<GetTeamMembersRoute>("/teams/:teamId/members", 
    { preHandler: authorizeRole(['user', 'admin']) }, 
    GetTeamMembersController);

  fastify.post<CreateTeamMemberRoute>(
    "/teams/:teamId/members",
    { preHandler: authorizeRole(['user', 'admin']) , schema: createTeamMemberSchema },
    CreateTeamMemberController
  )};