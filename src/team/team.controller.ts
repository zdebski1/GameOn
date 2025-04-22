import { FastifyRequest, FastifyReply } from "fastify";
import { CreateTeamDto } from "./team.dto";
import { createTeamService } from "./team.service";
import { getTeamsService } from "./team.service";
import { listOfErrorCodes } from "../utils/globalVariables";
import { errorMessage } from "../utils/helperFunctions";

export async function createTeamHandler(
  request: FastifyRequest<{
    Body: CreateTeamDto;
  }>,
  reply: FastifyReply
) {
  try {
    const user = request.user as { userId: number };
    const createTeamDto = {
      ...request.body,
      userId: user.userId,
    };
    return reply.code(201).send(await createTeamService(createTeamDto));
  } catch (error) {
    console.error("Error creating team: ", error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}

export async function getAllTeamsHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const user = request.user as { userId: number };
    reply.send(await getTeamsService(user.userId));
  } catch (error) {
    console.error("Error getting teams: ", error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}
