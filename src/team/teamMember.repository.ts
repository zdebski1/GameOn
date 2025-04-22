import { User, TeamMember } from "../models";
import { TeamMemberDto, TeamMemberWithUserDto } from "./teamMember.dto";
import ITeamMemberModel from "./teamMember.interface";

export async function getTeamMembersByTeamId(
  teamId: string
): Promise<TeamMemberWithUserDto[]> {
  try {
    const teamMembers = await TeamMember.findAll({
      where: [{ teamFk: teamId }, { isActive: true }],
      include: [
        {
          model: User,
          as: "user",
          attributes: ["firstName", "lastName"],
        },
      ],
      attributes: ["teamMemberId", "teamFk"],
    });

    return teamMembers.map((tm) => {
      const plain = tm.get({ plain: true }) as any;
      return plain as TeamMemberWithUserDto;
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

export async function getExistingTeamMember(teamMember: TeamMemberDto) {
  try {
    return TeamMember.findOne({
      where: [
        { userFk: teamMember.userFk },
        { teamFk: teamMember.teamFk },
        { isActive: true },
      ],
    });
  } catch (error) {
    console.error("Error fetching Team Members:", error);
  }
}
