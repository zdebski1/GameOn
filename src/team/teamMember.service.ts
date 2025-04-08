import { getTeamMembersByTeamId } from "./teamMember.repository";
import { TeamMemberDto, TeamMemberWithIdDto } from "./teamMember.dto";
import { createTeamMember } from "./teamMember.repository";


export async function teamMembersByTeamId(teamId: string): Promise<TeamMemberWithIdDto[]> {
  try {
    const teamMembers = await getTeamMembersByTeamId(teamId);

    return teamMembers.map(member => ({
      teamMemberId: member.teamMemberId,
      teamFk: member.teamFk,
      firstName: member.user.firstName,
      lastName: member.user.lastName,
      isActive: member.isActive
    }));

  } catch (error) {
    console.error('Error fetching team members: ', error);
    throw error; 
  }
}

export async function createTeamMemberService (teamMemberDto: TeamMemberDto) {
  try {
    const {
      teamFk,
      userFk,
      createdBy,
    } = teamMemberDto;


    const newTeamMember = await createTeamMember({
        teamFk,
        userFk,
        isActive: true,
        createdBy,
        createdDateTime: new Date(),
        updatedDateTime: null,
        updatedBy: null
    });

    return {
      message: 'Team Memember created successfully',
      teamMember: {
        teamMemberId: newTeamMember.teamMemberId,
        userFk: newTeamMember.userFk,
        isActive: newTeamMember.isActive
      },
    };

  } catch (error) {
    console.error('Error creating Team Member:', (error as Error).message);
    throw error;
  }
}