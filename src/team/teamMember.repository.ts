import { User, TeamMember } from "../models";
import { TeamMemberWithUserDto } from "./teamMember.dto";
import ITeamMemberModel from "./teamMember.interface";

export async function getTeamMembersByTeamId(teamId: string): Promise<TeamMemberWithUserDto[]> {
  try {
    const teamMembers = await TeamMember.findAll({
      where: {
        teamFk: teamId,
      },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['firstName', 'lastName'],
        },
      ],
      attributes: ['teamMemberId', 'isActive', 'teamFk'],
    });

    return teamMembers.map(tm => {
      const plain = tm.get({ plain: true }) as any;
      return plain as TeamMemberWithUserDto;
    });
  } catch (error) {
    console.error('Error fetching Team Members:', error);
    return [];
  }
}

export async function createTeamMember(data: Omit<ITeamMemberModel, 'teamMemberId'>) {
  return TeamMember.create(data);
}