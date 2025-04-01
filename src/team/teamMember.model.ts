import ITeamMemberModel from './teamMember.interface';
import sequelizeDb from '../config/sequelizeDb';  
import { DataTypes, Model } from 'sequelize';

class TeamMember extends Model<ITeamMemberModel> implements ITeamMemberModel {
    public teamMemberId!: Number;
    public teamMember!: String;
    public isActive!: Boolean;
    public teamFk!: Number;
    public createdDateTime!: Date;
    public createdBy!: String;
    public updatedDateTime!: Date;
    public updatedBy! : String;
}

TeamMember.init(
  {
    teamMemberId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    teamMember: {
      type: DataTypes.STRING,
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