import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserPreferenceDto } from "./user.preference.dto";
import {
  createUserPreferenceService,
  getUserPreferencesByUserIdService,
} from "./user.preferences.service";
import { errorMessage } from "../utils/helperFunctions";
import { listOfErrorCodes } from "../utils/globalVariables";

export async function createUserPreferencesHandler(
  request: FastifyRequest<{
    Body: Omit<CreateUserPreferenceDto, "userFk">;
  }>,
  reply: FastifyReply
) {
  try {
    const user = request.user as { userId: number };
    const createUserPreferenceDto = {
      ...request.body,
      userFk: user.userId,
    };
    return reply
      .code(201)
      .send(await createUserPreferenceService(createUserPreferenceDto));
  } catch (error) {
    console.error("Error creating user preference: ", error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}

export async function getUserPreferencesByUserHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const user = request.user as { userId: number };
    return reply
      .code(200)
      .send(await getUserPreferencesByUserIdService(user.userId));
  } catch (error) {
    console.error("Error fetching user preferences: ", error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}
