import { FastifyRequest, FastifyReply } from "fastify";
import {
  createTeamMemberService,
  teamMembersByTeamId,
} from "./teamMember.service";
import { TeamMemberDto } from "./teamMember.dto";
import { listOfErrorCodes } from "../utils/globalVariables";
import { errorMessage } from "../utils/helperFunctions";

export async function getAllTeamMembersHandler(
  request: FastifyRequest<{ Params: { teamId: string } }>,
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
  request: FastifyRequest<{
    Params: { teamId: string };
    Body: Omit<TeamMemberDto, "teamFk">;
  }>,
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
