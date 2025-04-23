import { FastifyReply, FastifyRequest } from "fastify";
import {
  updateEmailVerification,
  createEmailVerification,
} from "./verification.service";
import { errorMessage } from "../utils/helperFunctions";
import { listOfErrorCodes } from "../utils/globalVariables";
import {
  CreateEmailVerifyRoute,
  UpdateVerifyRoute,
} from "./verification.type";

export async function updateEmailVerificationHandler(
  request: FastifyRequest<UpdateVerifyRoute>,
  reply: FastifyReply
) {
  try {

    const updateVerifyRoute = {
      ...request.body,
      emailVerificationCode: request.params.emailVerificationCode
    };

    return reply
      .code(201)
      .send(await updateEmailVerification(updateVerifyRoute));
  } catch (error) {
    console.error("Error updating verification: ", error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}

export async function createUserEmailVerificationHandler(
  request: FastifyRequest<CreateEmailVerifyRoute>,
  reply: FastifyReply
) {
  try {
    return reply
      .code(201)
      .send(await createEmailVerification(request.body));
  } catch (error) {
    console.error("Error creating verification: ", error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}
