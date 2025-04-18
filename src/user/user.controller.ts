import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateUserDTO } from './user.dto';
import { createUserService } from './user.service';
import { errorMessage } from '../utils/helperFunctions';
import { listOfErrorCodes } from '../utils/globalVariables';

export async function createUserHandler(
  request: FastifyRequest<{ Body: CreateUserDTO }>,
  reply: FastifyReply
) {
  try {
    const createUserDto = request.body;
    const newUser = await createUserService(createUserDto);
    return reply.code(201).send(newUser);
  } catch (error) {
    console.error('Error creating user: ', error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}