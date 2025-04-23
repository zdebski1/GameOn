import {
  getExistingTeamMember,
  getTeamMembersByTeamId,
} from "./teamMember.repository";
import { CreateTeamMemberDto, TeamMemberWithIdDto } from "./teamMember.dto";
import { createTeamMember } from "./teamMember.repository";
import { HttpError } from "../utils/httpError";

export async function teamMembersByTeamId(
  teamId: string
): Promise<TeamMemberWithIdDto[]> {
  try {
    const teamMembers = await getTeamMembersByTeamId(teamId);

    return teamMembers.map((member) => ({
      teamMemberId: member.teamMemberId,
      teamFk: member.teamFk,
      firstName: member.user.firstName,
      lastName: member.user.lastName,
    }));
  } catch (error) {
    console.error("Error fetching team members: ", error);
    throw error;
  }
}

export async function createTeamMemberService(createTeamMemberDto: CreateTeamMemberDto) {
  try {
    const { teamFk, userFk, userId } = createTeamMemberDto;

    const existingTeamMember = await getExistingTeamMember(createTeamMemberDto);

    if (existingTeamMember) {
      throw new HttpError("Team Member already Exists", 409);
    }

    const newTeamMember = await createTeamMember({
      teamFk,
      userFk,
      isActive: true,
      createdBy: userId,
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
