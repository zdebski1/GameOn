import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateUserPreferenceDto } from './user.preference.dto';
import { createUserPreferenceService, getUserPreferencesByUserIdService } from './user.preferences.service';
import { errorMessage } from '../utils/helperFunctions';
import { listOfErrorCodes } from '../utils/globalVariables';

export async function createUserPreferencesHandler(
  request: FastifyRequest<{
    Params: { userId: string },
    Body: Omit<CreateUserPreferenceDto, 'userFk'>
  }>,
  reply: FastifyReply
) {
  try {
    const createUserPreferenceDto = {
      ...request.body,
      userFk: Number(request.params.userId),
    };
    return reply.code(201).send(await createUserPreferenceService(createUserPreferenceDto));
  } catch (error) {
    console.error('Error creating user preference: ', error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}

export async function getUserPreferencesByUserHandler(
  request: FastifyRequest<{
    Params: { userId: string }
  }>,
  reply: FastifyReply
) {
  try {
    return reply.code(200).send(await getUserPreferencesByUserIdService(Number(request.params.userId)));
  } catch (error) {
    console.error('Error fetching user preferences: ', error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}
