import User from './user.model';
import { IUserModel } from './user.interface';
import { Op, Sequelize } from 'sequelize';

export async function findUserByEmail(email: string) {
  return User.findOne({
    where: {
      [Op.and]: [
        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('email')), email.toLowerCase())
      ],
    },
  });
}

export async function findUserByUserId(userId: number) {
  return User.findOne({
    where: {userId: userId},
  });
}

export async function createUser(userModel: Omit<IUserModel, 'userId'>) {
  return await User.create(userModel);
}