import ITeamMemberModel from './teamMember.interface';
import sequelizeDb from '../config/sequelizeDb';  
import { DataTypes, Model } from 'sequelize';
import User from '../user/user.model';

class TeamMember extends Model<ITeamMemberModel> implements ITeamMemberModel {
    public teamMemberId!: number;
    public userFk!: number;
    public isActive!: boolean;
    public teamFk!: number;
    public createdDateTime!: Date;
    public createdBy!: string;
    public updatedDateTime!: Date;
    public updatedBy! : string;

    static associate(models: { User: typeof User }) {
      TeamMember.belongsTo(models.User, {
        foreignKey: 'userFk',
        as: 'user',
      });
    }
  }

TeamMember.init(
  {
    teamMemberId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userFk: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    teamFk: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdDateTime: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updatedDateTime: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeDb,
    tableName: 'teamMember',
    timestamps: false,
  }
);

export default TeamMember;