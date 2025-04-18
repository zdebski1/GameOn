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
    const {userId} = request.params;
    const createUserPreferenceDto = {
        ...request.body,
        userFk: Number(userId),
      };

    const newUserPreference = await createUserPreferenceService (createUserPreferenceDto);
    return reply.code(201).send(newUserPreference);
  } catch (error) {
    console.error('Error creating user preference: ', error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}

export async function getUserPreferencesByUserHandler(
  request: FastifyRequest<{ Params: { userId: string } }>,
  reply: FastifyReply
) {
  try {
    const { userId } = request.params;
    const numericUserId = Number(userId);

    if (isNaN(numericUserId)) {
      return reply.code(400).send({ message: 'Invalid userId' });
    }

    const userPreferences = await getUserPreferencesByUserIdService(numericUserId);

    return reply.code(200).send(userPreferences);
  } catch (error) {
    console.error('Error fetching user preferences: ', error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}
