import ITeamModel from "./team.interface";
import sequelizeDb from "../config/sequelizeDb";
import { DataTypes, Model } from "sequelize";

class Team extends Model<ITeamModel> implements ITeamModel {
  public teamId!: number;
  public teamName!: string;
  public isActive!: boolean;
  public isOwner!: boolean;
  public createdDateTime!: Date;
  public createdBy!: number;
  public updatedDateTime!: Date;
  public updatedBy!: number;
}

Team.init(
  {
    teamId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isOwner: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdDateTime: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    updatedDateTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeDb,
    tableName: "team",
    timestamps: false,
  }
);

export default Team;
