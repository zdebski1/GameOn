import ITeamModel from "./team.interface";
import Team from "./team.model";
import { TeamDto } from "./team.dto";
import { Op, Sequelize } from 'sequelize';
import sequelizeDb from '../config/sequelizeDb';  


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

export async function getTeamsOwnedByUser(teamDto: TeamDto) {
    return Team.findOne({
      where: {
        [Op.and]: [
          Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('teamName')), teamDto.teamName.toLowerCase()),
          { createdBy: teamDto.userId }
        ],
      },
    });
  }

  export async function getAllTeamsForUser(userId: number) {
    const results = await sequelizeDb.query(
      `
      SELECT 
        t."teamId",
        t."teamName",
        t."isOwner",
        t."createdBy"
      FROM public.team t
      WHERE t."createdBy" = :userId
  
      UNION
  
      SELECT 
        t."teamId",
        t."teamName",
        t."isOwner",
        t."createdBy"
      FROM public."teamMember" tm
      INNER JOIN public.team t ON tm."teamFk" = t."teamId"
      WHERE tm."userFk" = :userId;
      `,
      {
        replacements: { userId },
        type: sequelizeDb.QueryTypes.SELECT,
      }
    );
  
    return results;
  }