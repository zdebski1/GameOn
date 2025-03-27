import IAvailabilityModel from './interface'; 
import sequelizeDb from '../config/sequelizeDb';  
import { DataTypes, Model } from 'sequelize';

class Availability extends Model<IAvailabilityModel> implements IAvailabilityModel {
  public id!: Number;
  public gameNameFk!: Number;
  public availableDateTime!: Date;
  public createdDateTime!: Date;
  public createdBy!: String;
  public updatedDateTime!: Date;
  public updatedBy!: String
}

Availability.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    gameNameFk: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    availableDateTime: {
      type: DataTypes.DATE,
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
    tableName: 'availability',
    timestamps: false,
  }
);

export default Availability;