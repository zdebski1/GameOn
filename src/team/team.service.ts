import { TeamDto } from './team.dto';
import { getAllTeams, createTeam, getAllTeamsForUser } from './team.repository';
import { HttpError } from '../utils/httpError';
import { getActiveTeamsByUser } from './team.repository';

export async function createTeamService (teamDto: TeamDto) {
  try {
    const {
        teamName,
        isOwner,
        createdBy
    } = teamDto;

    const existingTeam = await getActiveTeamsByUser(teamDto);

    if (existingTeam) {
      throw new HttpError('Team already exists', 409);
    }

    const newTeam = await createTeam({
        teamName,
        isActive: true,
        isOwner,
        createdDateTime: new Date(),
        createdBy,
        updatedDateTime: null,
        updatedBy: null
    });

    return {
      message: 'Team created successfully',
      team: {
        teamName: newTeam.teamName
      },
    };

  } catch (error) {
    console.error('Error creating Team:', (error as Error).message);
    throw error;
  }
}

export async function getTeamsService(userId?: number): Promise<TeamDto[]> {
  try {
    const teams = userId
      ? await getAllTeamsForUser(userId)
      : await getAllTeams();

    return (teams ?? []).map((team: TeamDto) => ({
      teamId: team.teamId,
      teamName: team.teamName,
      isOwner: team.isOwner,
      createdBy: team.createdBy,
    }));
  } catch (error) {
    console.error('Error fetching teams: ', error);
    throw error;
  }
}
