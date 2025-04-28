import sequelizeDb from "../config/sequelizeDb";
import { DataTypes, Model } from "sequelize";
import { IPreferencesModel } from "./interface";

class UserPreferences
  extends Model<IPreferencesModel>
  implements IPreferencesModel
{
  public preferenceId!: number;
  public userFk!: number;
  public allowSmsNotifications!: boolean;
  public allowEmailNotifications!: boolean;
  public marketingOptIn!: boolean;
  public createdDate!: Date;
  public createdBy!: number;
  public updatedDateTime!: Date;
  public updatedBy!: number;
}
UserPreferences.init(
  {
    preferenceId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userFk: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    allowSmsNotifications: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    allowEmailNotifications: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    marketingOptIn: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    createdDate: {
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
    tableName: "preferences",
    timestamps: false,
  }
);

export default UserPreferences;
