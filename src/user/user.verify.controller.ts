import { FastifyReply, FastifyRequest } from "fastify";
import {
  createUserEmailVerifyService,
  resendVerificationCodeToEmail,
} from "./user.verify.service";
import { CreateUserVerifyDto } from "./user.verify.dto";
import { errorMessage } from "../utils/helperFunctions";
import { listOfErrorCodes } from "../utils/globalVariables";

export async function createUserEmailVerifyHandler(
  request: FastifyRequest<{
    Body: CreateUserVerifyDto;
  }>,
  reply: FastifyReply
) {
  try {
    const user = request.user as { userId: number };
    const createUserVerifyDto = {
      ...request.body,
      userId: user.userId,
    };
    return reply
      .code(201)
      .send(await createUserEmailVerifyService(createUserVerifyDto));
  } catch (error) {
    console.error("Error with user verification: ", error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}

export async function createResendUserEmailVerificationHandler(
  request: FastifyRequest<{
    Body: CreateUserVerifyDto;
  }>,
  reply: FastifyReply
) {
  try {
    const user = request.user as { userId: number };
    return reply
      .code(201)
      .send(await resendVerificationCodeToEmail(user.userId));
  } catch (error) {
    console.error("Error resending user verification: ", error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}
