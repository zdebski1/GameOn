import { FastifyRequest, FastifyReply } from "fastify";
import {
  createTeamMemberService,
  teamMembersByTeamId,
} from "./teamMember.service";
import { listOfErrorCodes } from "../utils/globalVariables";
import { errorMessage } from "../utils/helperFunctions";
import { CreateTeamMemberRoute, GetAllTeamMembersRoute } from "./teamMember.type";

export async function getAllTeamMembersHandler(
  request: FastifyRequest<GetAllTeamMembersRoute>,
  reply: FastifyReply
) {
  try {
    return reply
      .code(200)
      .send(await teamMembersByTeamId(request.params.teamId));
  } catch (error) {
    console.error("Error getting team members:", error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}

export async function createTeamMemberHandler(
  request: FastifyRequest<CreateTeamMemberRoute>,
  reply: FastifyReply
) {
  try {
    const user = request.user as { userId: number };
    const teamMemberDto = {
      ...request.body,
      teamFk: Number(request.params.teamId),
      userId: user.userId
    };
    return reply.code(201).send(await createTeamMemberService(teamMemberDto));
  } catch (error) {
    console.error("Error creating team member: ", error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}
