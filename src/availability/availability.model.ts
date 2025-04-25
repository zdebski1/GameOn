import { IAvailabilityModel } from "./availability.interface";
import sequelizeDb from "../config/sequelizeDb";
import { DataTypes, Model } from "sequelize";

class Availability
  extends Model<IAvailabilityModel>
  implements IAvailabilityModel
{
  public availabilityId!: number;
  public teamFk!: number;
  public teamMemberFk!: number;
  public availableDate!: Date;
  public startDateTime!: Date;
  public endDateTime!: Date;
  public createdDateTime!: Date;
  public createdBy!: number;
  public updatedDateTime!: Date;
  public updatedBy!: number;
}

Availability.init(
  {
    availabilityId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    teamFk: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    teamMemberFk: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    availableDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    startDateTime: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    endDateTime: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    createdDateTime: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.STRING,
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
    tableName: "availability",
    timestamps: false,
  }
);

export default Availability;
