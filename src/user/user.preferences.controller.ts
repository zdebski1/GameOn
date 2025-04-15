import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateUserPreferenceDto } from './user.preference.dto';
import { createUserPreferenceService } from './user.preferences.service';

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

    if (error instanceof Error && (error as any).statusCode === 409) {
      return reply.code(409).send({ message: error.message });
    }
    
    return reply.code(500).send({ message: 'Internal Server Error' });
  }
}
