import { FastifyRequest, FastifyReply } from 'fastify';
import { TeamDto } from './team.dto';
import { createTeamService } from './team.service';
import { getTeamsService } from './team.service';
import { listOfErrorCodes } from '../utils/globalVariables';
import { errorMessage } from '../utils/helperFunctions';



export async function createTeamHandler (
  request: FastifyRequest<{ Body: TeamDto }>,
  reply: FastifyReply
) {
  try {;
    return reply.code(201).send(await createTeamService(request.body));
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
