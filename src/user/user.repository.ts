import User from './user.model';
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

export async function createUser(userModel: Omit<IUserModel, 'userId'>) {
  return User.create(userModel);
}