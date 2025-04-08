import { getTeamMembersByTeamId } from "./teamMember.repository";
import { TeamMemberDto } from "./teamMember.dto";


export async function teamMembersByTeamId(teamId: string): Promise<TeamMemberDto[]> {
    try {
      const teamMembers = await getTeamMembersByTeamId(teamId);
  
      return teamMembers.map(member => ({
        teamMemberId: member.teamMemberId,
        teamFk: member.teamFk,
        firstName: member.user.firstName,
        lastName: member.user.lastName,
        userIsActive: member.user.isActive
      }));

    } catch (error) {
      console.error('Error fetching team members: ', error);
      throw error;
    }
  }