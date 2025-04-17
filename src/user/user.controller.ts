import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateUserDTO } from './user.dto';
import { createUserService } from './user.service';

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

    if (error instanceof Error && (error as any).statusCode === 409) {
      return reply.code(409).send({ message: error.message });
    }
    
    return reply.code(500).send({ message: 'Internal Server Error' });
  }
}