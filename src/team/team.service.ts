import { TeamDto, CreateTeamDto } from './team.dto';
import { createTeam, getAllTeamsForUser } from './team.repository';
import { HttpError } from '../utils/httpError';
import { getTeamsOwnedByUser } from './team.repository';

export async function createTeamService(createTeamDto: CreateTeamDto) {
  try {
    const {
      teamName,
      isOwner,
      userId
    } = createTeamDto;

    if (await getTeamsOwnedByUser(createTeamDto)) {
      throw new HttpError('Team already exists', 409);
    }

    const newTeam = await createTeam({
      teamName,
      isActive: true,
      isOwner,
      createdDateTime: new Date(),
      createdBy: userId,
      updatedDateTime: null,
      updatedBy: null
    });

    return {
      message: 'Team created successfully',
      team: {
        teamName: newTeam.teamName,
        isOwner: newTeam.isOwner
      },
    };

  } catch (error) {
    console.error('Error creating Team:', (error as Error).message);
    throw error;
  }
}

export async function getTeamsService(userId: number): Promise<TeamDto[]> {
  try {
    return (await getAllTeamsForUser(userId) ?? []).map((team: TeamDto) => ({
      teamId: team.teamId,
      teamName: team.teamName,
      isOwner: team.isOwner
    }));
  } catch (error) {
    console.error('Error fetching teams: ', error);
    throw error;
  }
}
