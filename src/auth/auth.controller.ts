import { FastifyReply, FastifyRequest } from "fastify";
import { loginService } from "./auth.service";
import { LoginRequestDto } from "./auth.dto";
import { errorMessage } from "../utils/helperFunctions";
import { listOfErrorCodes } from "../utils/globalVariables";

export async function loginController(
  request: FastifyRequest<{ Body: LoginRequestDto }>,
  reply: FastifyReply
) {
  try {
    return reply.code(201).send(await loginService(request.body));
  } catch (error) {
    console.error("Error logging in: ", error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}
