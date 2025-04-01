import IAvailabilityModel from './interface'; 
import sequelizeDb from '../config/sequelizeDb';  
import { DataTypes, Model } from 'sequelize';

class Availability extends Model<IAvailabilityModel> implements IAvailabilityModel {
  public availabilityId!: Number;
  public gameNameFk!: Number;
  public teamFk!: Number;
  public availableDateTime!: Date;
  public createdDateTime!: Date;
  public createdBy!: String;
  public updatedDateTime!: Date;
  public updatedBy!: String
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