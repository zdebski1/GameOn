import IUserModel from './user.interface';
import sequelizeDb from '../config/sequelizeDb';  
import { DataTypes, Model } from 'sequelize';
import TeamMember from '../team/teamMember.model';

class User extends Model<IUserModel> implements IUserModel {
    public userId!: Number;
    public userName!: String;
    public password!: String;
    public firstName!: String;
    public lastName!: String;
    public birthdate!: Date;
    public steamAccountId!: String;
    public isActive!: Boolean;
    public createdDateTime!: Date;
    public createdBy!: String;
    public updatedDateTime!: Date;
    public updatedBy!: String;

    static associate(models: { TeamMember: typeof TeamMember }) {
      User.hasMany(models.TeamMember, {
        foreignKey: 'userFk',
        as: 'teamMembers',
      });
    }
  }

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthdate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      steamAccountId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
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
    tableName: 'user',
    timestamps: false,
  }
);

export default User;