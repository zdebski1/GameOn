import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateTeamDto } from './team.dto';
import { createTeamService } from './team.service';
import { getTeamsService } from './team.service';
import { listOfErrorCodes } from '../utils/globalVariables';
import { errorMessage } from '../utils/helperFunctions';



export async function createTeamHandler (
  request: FastifyRequest<{ 
    Body: CreateTeamDto,
    Params: { userId: string }  
  }>,
  reply: FastifyReply
) {
  try {
    const createTeamDto = {
      ...request.body,
      userId: Number(request.params.userId),
    };
    return reply.code(201).send(await createTeamService(createTeamDto));
  } catch (error) {
    console.error('Error creating team: ', error); 
    await errorMessage(error, listOfErrorCodes, reply);
  }
}


export async function getAllTeamsHandler(
  request: FastifyRequest<{
    Params: { userId: string } 
  }>,
  reply: FastifyReply
) {
  try {
    reply.send(await getTeamsService(Number(request.params.userId)));
  } catch (error) {
    console.error('Error getting teams: ', error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}