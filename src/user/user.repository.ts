import User from './user.model';
import { Op } from 'sequelize';
import { IUserModel } from './user.interface';

export async function findUserByEmail(email: string) {
  return User.findOne({
    where: {
      [Op.or]: [{ email }],
    },
  });
}

export async function createUser(data: Omit<IUserModel, 'userId'>) {
  return User.create(data);
}