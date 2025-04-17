import { IUserModel } from './user.interface';
import sequelizeDb from '../config/sequelizeDb';  
import { DataTypes, Model } from 'sequelize';
import TeamMember from '../team/teamMember.model';

class User extends Model<IUserModel> implements IUserModel {
    public userId!: number;
    public userName!: string;
    public password!: string;
    public email!: string;
    public phoneNumber!: string;
    public firstName!: string;
    public lastName!: string;
    public isActive!: boolean;
    public isAdmin!: boolean;
    public isEmailVerified!: boolean;
    public isPhoneNumberVerified!: boolean;        
    public profilePictureUrl!: string;    
    public uuid!: string;
    public emailVerificationCode!: string;
    public emailVerificationExpiresAt!: Date;
    public createdDateTime!: Date;
    public createdBy!: number;
    public updatedDateTime!: Date;
    public updatedBy!: number;

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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },    
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isEmailVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false, 
      defaultValue: false
    },  
    isPhoneNumberVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false      
    },  
    profilePictureUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailVerificationCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailVerificationExpiresAt: {
      type: DataTypes.DATE,
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
    tableName: 'user',
    timestamps: false,
  }
);

export default User;