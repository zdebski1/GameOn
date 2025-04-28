import { FastifyInstance } from "fastify";
import {
  CreateTeamMemberController,
  GetTeamMembersController,
} from "./controller";
import { createTeamMemberSchema } from "./schema";
import { authorizeRole } from "../middleware/authorizeRole";
import { CreateTeamMemberRoute, GetTeamMembersRoute } from "./type";

export default async function (fastify: FastifyInstance) {
  fastify.get<GetTeamMembersRoute>("/teams/:teamId/members", 
    { preHandler: authorizeRole(['user', 'admin']) }, 
    GetTeamMembersController);

  fastify.post<CreateTeamMemberRoute>(
    "/teams/:teamId/members",
    { preHandler: authorizeRole(['user', 'admin']) , schema: createTeamMemberSchema },
    CreateTeamMemberController
  )};