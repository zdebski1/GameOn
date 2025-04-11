import { FastifyRequest, FastifyReply } from 'fastify';
import { TeamDto } from './team.dto';
import { createTeamService } from './team.service';
import { getTeamsService } from './team.service';



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
    
    if (error instanceof Error && (error as any).statusCode === 409) {
      return reply.code(409).send({ message: error.message });
  }
  return reply.code(500).send({ message: 'Internal Server Error' });
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
    return reply.code(500).send({ message: 'Internal Server Error' });
  }
}
