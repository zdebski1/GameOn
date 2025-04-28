import { FastifyRequest, FastifyReply } from "fastify";
import {
  createTeamMemberService,
  teamMembersByTeamId,
} from "./service";
import { listOfErrorCodes } from "../utils/globalVariables";
import { errorMessage } from "../utils/helperFunctions";
import { CreateTeamMemberRoute, GetTeamMembersRoute } from "./type";

export async function GetTeamMembersController(
  request: FastifyRequest<GetTeamMembersRoute>,
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

export async function CreateTeamMemberController(
  request: FastifyRequest<CreateTeamMemberRoute>,
  reply: FastifyReply
) {
  try {
    const user = request.user as { userId: number };
    const createTeamMemberDto = {
      ...request.body,
      teamFk: Number(request.params.teamId),
      userId: user.userId
    };
    return reply.code(201).send(await createTeamMemberService(createTeamMemberDto));
  } catch (error) {
    console.error("Error creating team member: ", error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}
