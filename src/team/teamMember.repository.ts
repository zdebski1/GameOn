import { User, TeamMember } from "../models";

export async function getAllTeamMembers() {
  try {
    const teamMembers = await TeamMember.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: [
            'firstName',
            'lastName'
          ],
        },
      ],
      attributes: [
        'teamMemberId',
        'isActive',
        'teamFk',
      ],
    });

    return teamMembers.map(teamMember => teamMember.get({ plain: true }));
  } catch (error) {
    console.error('Error fetching Team Members:', error);
  }
}

export async function getTeamMembersByTeamId(teamId: string) {
  try {
    const teamMembers = await TeamMember.findAll({
      where: {
        teamFk: teamId,
      },
      include: [
        {
          model: User,
          as: 'user',
          attributes: [
            'firstName',
            'lastName',
          ],
        },
      ],
      attributes: [
        'teamMemberId',
        'isActive',
        'teamFk',
      ],
    });

    return teamMembers.map(teamMember => teamMember.get({ plain: true }));
  } catch (error) {
    console.error('Error fetching Team Members:', error);
  }
}