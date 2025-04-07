import { getTeamMembersByTeamId } from "./teamMember.repository";
import { TeamMemberDto } from "./teamMember.dto";

export async function teamMembersByTeamId(teamId: string): Promise<TeamMemberDto[]> {
    try {
      const teamMembers = await getTeamMembersByTeamId(teamId) ?? [];
  
      return teamMembers.map(teamMembers => ({
        teamMemberId: teamMembers.teamMemberId
      }));
    } catch (error) {
      console.error('Error fetching team members: ', error);
      throw error;
    }
  }