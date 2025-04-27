import { FastifyRequest, FastifyReply } from "fastify";
import { UserDTO } from "./user.dto";
import { createUserService } from "./user.service";
import { errorMessage } from "../utils/helperFunctions";
import { listOfErrorCodes } from "../utils/globalVariables";

export async function CreateUsersController(
  request: FastifyRequest<{ Body: UserDTO }>,
  reply: FastifyReply
) {
  try {
    return reply.code(201).send(await createUserService(request.body));
  } catch (error) {
    console.error("Error creating user: ", error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}
