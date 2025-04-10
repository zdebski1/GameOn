import { FastifyRequest, FastifyReply } from 'fastify';
import { createTeamMemberService, teamMembersByTeamId } from "./teamMember.service";
import { TeamMemberDto } from './teamMember.dto';

export async function getAllTeamMembersHandler(
    request: FastifyRequest<{ Params: { teamId: string } }>,
    reply: FastifyReply
  ) {
    try {
      const { teamId } = request.params;
  
      const teamMembers = await teamMembersByTeamId(teamId);
  
      return reply.code(200).send(teamMembers);
    } catch (error) {
      console.error('Error getting team members:', error);
      return reply.code(500).send({ message: 'Internal Server Error' });
    }
  }


export async function createTeamMemberHandler (
    request: FastifyRequest<{ 
      Params: { teamId: string }, 
      Body: Omit<TeamMemberDto, 'teamFk'> 
    }>,
    reply: FastifyReply
  ) {
    try {
      const { teamId } = request.params;
      const teamMemberDto = {
        ...request.body,
        teamFk: Number(teamId),
      };
  
      const newTeamMember = await createTeamMemberService(teamMemberDto);
      return reply.code(201).send(newTeamMember);
  
    } catch (error) {
      console.error('Error creating team member: ', error);
      
      if (error instanceof Error && (error as any).statusCode === 409) {
        return reply.code(409).send({ message: error.message });
    }
    return reply.code(500).send({ message: 'Internal Server Error' });
  }
}