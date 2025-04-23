import { FastifyReply, FastifyRequest } from "fastify";
import {
  createUserEmailVerifyService,
  sendVerificationCodeToEmail,
} from "./user.verify.service";
import { errorMessage } from "../utils/helperFunctions";
import { listOfErrorCodes } from "../utils/globalVariables";
import {
  CreateSendEmailVerifyRoute,
  CreateUserVerifyRoute,
} from "./user.verify.type";

export async function createUserEmailVerifyHandler(
  request: FastifyRequest<CreateUserVerifyRoute>,
  reply: FastifyReply
) {
  try {
    return reply
      .code(201)
      .send(await createUserEmailVerifyService(request.body));
  } catch (error) {
    console.error("Error with user verification: ", error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}

export async function createSendUserEmailVerificationHandler(
  request: FastifyRequest<CreateSendEmailVerifyRoute>,
  reply: FastifyReply
) {
  try {
    return reply
      .code(201)
      .send(await sendVerificationCodeToEmail(request.body.email));
  } catch (error) {
    console.error("Error sending user verification: ", error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}
