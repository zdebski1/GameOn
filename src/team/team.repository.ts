import ITeamModel from "./team.interface";
import Team from "./team.model";
import { TeamDto } from "./team.dto";
import { Op, Sequelize } from 'sequelize';

export async function getAllTeams() {
    try {
        const teams = await Team.findAll();

        return teams.map(team => team.get({ plain: true }));

    }catch(error) {
        console.error('Error fetching teams:', error);
    }
}

export async function createTeam(teamModel: Omit<ITeamModel, 'teamId'>) {
    return Team.create(teamModel);
  }

export async function getActiveTeamsByUser(teamModel: TeamDto) {
    return Team.findOne({
      where: {
        [Op.and]: [
          Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('teamName')), teamModel.teamName.toLowerCase()),
          { createdBy: teamModel.createdBy }
        ],
      },
    });
  }