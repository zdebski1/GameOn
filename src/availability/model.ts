import IAvailabilityModel from './interface'; 
import sequelizeDb from '../config/sequelizeDb';  
import { DataTypes, Model } from 'sequelize';

class Availability extends Model<IAvailabilityModel> implements IAvailabilityModel {
  public availabilityId!: number;
  public gameNameFk!: number;
  public teamFk!: number;
  public availableDateTime!: Date;
  public createdDateTime!: Date;
  public createdBy!: number;
  public updatedDateTime!: Date;
  public updatedBy!: number
}

Availability.init(
  {
    availabilityId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    gameNameFk: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    teamFk: {
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
      type: DataTypes.INTEGER,
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