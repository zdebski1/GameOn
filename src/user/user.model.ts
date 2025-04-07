import { IUserModel } from './user.interface';
import sequelizeDb from '../config/sequelizeDb';  
import { DataTypes, Model } from 'sequelize';
import TeamMember from '../team/teamMember.model';

class User extends Model<IUserModel> implements IUserModel {
    public userId!: number;
    public userName!: string;
    public password!: string;
    public firstName!: string;
    public lastName!: string;
    public birthdate!: Date;
    public steamAccountId!: string;
    public isActive!: boolean;
    public createdDateTime!: Date;
    public createdBy!: string;
    public updatedDateTime!: Date;
    public updatedBy!: string;

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
        allowNull: true,
      },
      steamAccountId: {
        type: DataTypes.STRING,
        allowNull: true,
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
      allowNull: true,
    },
    updatedBy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeDb,
    tableName: 'user',
    timestamps: false,
  }
);

export default User;