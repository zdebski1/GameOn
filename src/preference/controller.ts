import { FastifyRequest, FastifyReply } from "fastify";
import {
  createUserPreferenceService,
  getPreferencesByUserIdService,
} from "./service";
import { errorMessage } from "../utils/helperFunctions";
import { listOfErrorCodes } from "../utils/globalVariables";
import { CreatePreferenceRoute } from "./type";

export async function CreatePreferencesController(
  request: FastifyRequest<CreatePreferenceRoute>,
  reply: FastifyReply
) {
  try {
    const user = request.user as { userId: number };
    const createPreferenceDto = {
      ...request.body,
      userFk: user.userId,
    };
    return reply
      .code(201)
      .send(await createUserPreferenceService(createPreferenceDto));
  } catch (error) {
    console.error("Error creating user preference: ", error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}

export async function GetPreferencesByUserController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const user = request.user as { userId: number };
    return reply
      .code(200)
      .send(await getPreferencesByUserIdService(user.userId));
  } catch (error) {
    console.error("Error fetching user preferences: ", error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}
