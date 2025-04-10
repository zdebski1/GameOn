import User from './user.model';
import { Op } from 'sequelize';
import { IUserModel } from './user.interface';

export async function findUserByEmail(email: string) {
  return User.findOne({
    where: 
      { email: email.toLowerCase()},
  });
}

export async function findUserByUserName(userName: string) {
  return User.findOne({
    where: 
      [{ userName: userName.toLowerCase() } , { isActive: true }],
  });
}

export async function createUser(data: Omit<IUserModel, 'userId'>) {
  return User.create(data);
}