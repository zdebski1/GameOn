import { FastifyRequest, FastifyReply } from 'fastify';
import { teamMembersByTeamId } from "./teamMember.service";

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