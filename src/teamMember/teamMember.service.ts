import {
  getExistingTeamMember,
  getTeamMembersByTeamId,
} from "./teamMember.repository";
import { TeamMemberDto } from "./teamMember.dto";
import { createTeamMember } from "./teamMember.repository";
import { HttpError } from "../utils/httpError";

export async function teamMembersByTeamId(
  teamId: string
): Promise<TeamMemberDto[]> {
  try {
    const teamMembers = await getTeamMembersByTeamId(teamId);

    return teamMembers;
    
  } catch (error) {
    console.error("Error fetching team members: ", error);
    throw error;
  }
}

export async function createTeamMemberService(teamMemberDto: TeamMemberDto) {
  try {
    const { teamFk, userFk } = teamMemberDto;

    const existingTeamMember = await getExistingTeamMember(teamMemberDto);

    if (existingTeamMember) {
      throw new HttpError("Team Member already Exists", 409);
    }

    const newTeamMember = await createTeamMember({
      teamFk,
      userFk,
      isActive: true,
      createdBy: userFk,
      createdDateTime: new Date(),
      updatedDateTime: null,
      updatedBy: null,
    });

    return {
      message: "Team Memember created successfully",
      teamMember: {
        teamMemberId: newTeamMember.teamMemberId,
        userFk: newTeamMember.userFk,
      },
    };
  } catch (error) {
    console.error("Error creating Team Member:", (error as Error).message);
    throw error;
  }
}
