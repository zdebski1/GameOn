import { TeamDto } from './team.dto';
import Team from './team.model';
import getAllTeams from './team.repository';

export async function createTeamService (teamDto: TeamDto) {
  try {
    const {
        teamName,
        isOwner,
        createdBy
    } = teamDto;


    const newTeam = await Team.create({
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

export async function getAllTeamService(): Promise<TeamDto[]> {
  try {
    const teams = await getAllTeams() ?? [];

    return teams.map(team => ({
      teamId: team.teamId,
      teamName: team.teamName,
      isOwner: team.isOwner,
      createdBy: team.createdBy
    }));
  } catch (error) {
    console.error('Error fetching all teams: ', error);
    throw error;
  }
}