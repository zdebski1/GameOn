import { FastifyReply, FastifyRequest } from "fastify";
import { AuthenticateService } from "./authenticate.service";
import { AuthenticateRequestDto } from "./authenticate.dto";
import { errorMessage } from "../utils/helperFunctions";
import { listOfErrorCodes } from "../utils/globalVariables";

export async function AuthenticateController(
  request: FastifyRequest<{ Body: AuthenticateRequestDto }>,
  reply: FastifyReply
) {
  try {
    return reply.code(201).send(await AuthenticateService(request.body));
  } catch (error) {
    console.error("Error authenticating: ", error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}
