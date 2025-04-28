import { User, TeamMember } from "../models";
import { TeamMemberDto } from "./dto";
import ITeamMemberModel from "./interface";

export async function getTeamMembersByTeamId(
  teamId: string
): Promise<TeamMemberDto[]> {
  try {
    const teamMembers = await TeamMember.findAll({
      where: [{ teamFk: teamId }, { isActive: true }],
      include: [
        {
          model: User,
          as: "user",
          attributes: ["userId", "firstName", "lastName", "userName" ,"email", "phoneNumber"],
        },
      ],
      attributes: ["teamMemberId", "teamFk"],
    });

    return teamMembers.map((tm) => {
      const plain = tm.get({ plain: true }) as any;
      return plain as TeamMemberDto;
    });
  } catch (error) {
    console.error("Error fetching Team Members:", error);
    return [];
  }
}

export async function createTeamMember(
  teamMemberModel: Omit<ITeamMemberModel, "teamMemberId">
) {
  return TeamMember.create(teamMemberModel);
}

export async function getExistingTeamMember(teamMemberDto: TeamMemberDto) {
  try {
    return TeamMember.findOne({
      where: [
        { userFk: teamMemberDto.userFk },
        { teamFk: teamMemberDto.teamFk },
        { isActive: true },
      ],
    });
  } catch (error) {
    console.error("Error fetching Team Members:", error);
  }
}
