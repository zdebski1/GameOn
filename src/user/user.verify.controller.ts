import { FastifyReply, FastifyRequest } from "fastify";
import { createUserVerifyService } from "./user.verify.service";
import { CreateUserVerifyDto } from "./user.verify.dto";
import { errorMessage } from "../utils/helperFunctions";
import { listOfErrorCodes } from "../utils/globalVariables";

export async function createUserVerifyHandler(
    request: FastifyRequest<{Body: CreateUserVerifyDto}>,
    reply: FastifyReply
  ) {
    try{
        const createUserVerifyDto = request.body;
        const newUserVerification = await createUserVerifyService(createUserVerifyDto);
        return reply.code(201).send(newUserVerification);
    }catch(error){
      console.error('Error with user verification: ', error)
      await errorMessage(error, listOfErrorCodes, reply);
     }
  }