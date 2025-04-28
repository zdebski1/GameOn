import { FastifyReply, FastifyRequest } from "fastify";
import {
  CreateAvailabilityService,
  GetAvailibitiesService,
} from "./service";
import { errorMessage } from "../utils/helperFunctions";
import { listOfErrorCodes } from "../utils/globalVariables";
import { CreateAvailabilityRoute, GetAvailabilityRoute } from "./type";

export async function GetAvailibitiesController(
  request: FastifyRequest<GetAvailabilityRoute>,
  reply: FastifyReply
) {
  try {
    const getAvailabilityRoute = {
      teamFk: Number(request.params.teamId),
      teamMemberFk: Number(request.params.teamMemberId)
    } ;
    reply.send(await GetAvailibitiesService(getAvailabilityRoute));
  } catch (error) {
    console.log("error: Failed to fetch availabilities");
    reply.status(500).send({ error: "Failed to fetch availabilities" });
  }
}

export async function CreateAvailabilityController(
  request: FastifyRequest<CreateAvailabilityRoute>,
  reply: FastifyReply
) {
  try {
    const user = request.user as { userId: number };
    const createAvailabilityDto = {
      ...request.body,
      teamFk: Number(request.params.teamId),
      userId: user.userId,
    };
    return reply
      .code(201)
      .send(await CreateAvailabilityService(createAvailabilityDto));
  } catch (error) {
    console.error("Error creating availability: ", error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}
