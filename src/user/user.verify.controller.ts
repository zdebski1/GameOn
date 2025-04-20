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
      const {userId} = request.params;
      const createUserVerifyDto = {
          ...request.body,
          userId: Number(userId),
        };
        const newUserVerification = await createUserEmailVerifyService(createUserVerifyDto);
        return reply.code(201).send(newUserVerification);
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
      const resendEmailVerificationCode = await resendVerificationCodeToEmail(Number(request.params.userId));
      return reply.code(201).send(resendEmailVerificationCode);
    }catch(error){
      console.error('Error resending user verification: ', error)
      await errorMessage(error, listOfErrorCodes, reply);
     }
  }