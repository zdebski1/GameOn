import ITeamModel from "./team.interface";
import Team from "./team.model";

export async function getAllTeams() {
    try {
        const teams = await Team.findAll();

        return teams.map(team => team.get({ plain: true }));

    }catch(error) {
        console.error('Error fetching teams:', error);
    }
}

export async function createTeam(data: Omit<ITeamModel, 'teamId'>) {
    return Team.create(data);
  }