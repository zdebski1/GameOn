import { FastifyReply, FastifyRequest } from "fastify";
import { createUserEmailVerifyService, resendVerificationCodeToEmail } from "./user.verify.service";
import { CreateUserVerifyDto } from "./user.verify.dto";
import { errorMessage } from "../utils/helperFunctions";
import { listOfErrorCodes } from "../utils/globalVariables";

export async function createUserEmailVerifyHandler(
    request: FastifyRequest<{
      Body: CreateUserVerifyDto
      Params: { userId: string },
    }>,
    reply: FastifyReply
  ) {
    try{
      const createUserVerifyDto = {
          ...request.body,
          userId: Number(request.params.userId),
        };
        return reply.code(201).send(await createUserEmailVerifyService(createUserVerifyDto));
    }catch(error){
      console.error('Error with user verification: ', error)
      await errorMessage(error, listOfErrorCodes, reply);
     }
  }


export async function createResendUserEmailVerificationHandler(
    request: FastifyRequest<{
      Body: CreateUserVerifyDto
      Params: { userId: string },
    }>,
    reply: FastifyReply
  ) {
    try{
      return reply.code(201).send(await resendVerificationCodeToEmail(Number(request.params.userId)));
    }catch(error){
      console.error('Error resending user verification: ', error)
      await errorMessage(error, listOfErrorCodes, reply);
     }
  }