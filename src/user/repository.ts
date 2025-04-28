import User from "./model";
import { IUserModel } from "./interface";
import { Op, Sequelize } from "sequelize";

export async function getUserByEmail(email: string) {
  return User.findOne({
    where: {
      [Op.and]: [
        Sequelize.where(
          Sequelize.fn("LOWER", Sequelize.col("email")),
          email.toLowerCase()
        ),
      ],
    },
  });
}

export async function getUserByUserId(userId: number) {
  return User.findOne({
    where: { userId: userId },
  });
}

export async function getUserByUserName(userName: string) {
  return User.findOne({
    where: {
      [Op.and]: [
        Sequelize.where(
          Sequelize.fn("LOWER", Sequelize.col("userName")),
          userName.toLowerCase()
        ),
      ],
    },
  });
}

export async function createUser(userModel: Omit<IUserModel, "userId">) {
  return await User.create(userModel);
}
