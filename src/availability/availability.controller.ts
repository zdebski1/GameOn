import { FastifyReply, FastifyRequest } from "fastify";
import {
  CreateAvailabilityService,
  GetAvailibitiesService,
} from "./availability.service";
import { errorMessage } from "../utils/helperFunctions";
import { listOfErrorCodes } from "../utils/globalVariables";
import { CreateAvailabilityRoute } from "./availability.type";

export async function GetAvailibitiesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    reply.send(await GetAvailibitiesService());
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
