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
  try {
    const teamDto = request.body;
    const newTeam = await createTeamService(teamDto);
    return reply.code(201).send(newTeam);
  } catch (error) {
    console.error('Error creating team: ', error); 
    await errorMessage(error, listOfErrorCodes, reply);
}
}


export async function getAllTeamsHandler(
  request: FastifyRequest<{ Querystring: { userId?: number } }>,
  reply: FastifyReply
) {
  try {
    const { userId } = request.query;

    const teams = await getTeamsService(userId);

    reply.send(teams);
  } catch (error) {
    console.error('Error getting teams: ', error);
    await errorMessage(error, listOfErrorCodes, reply);
  }
}
