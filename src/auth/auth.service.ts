import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { findUserByUserName } from "../user/user.repository";
import { HttpError } from "../utils/httpError";

export async function loginService ({
  userName,
  password
}: {
  userName: string,
  password: string
}) {

  const user = await findUserByUserName(userName);

  if (!user) {
    throw new HttpError('Username or password is incorrect', 401);
  }

  const combinedPassword = password + user.uuid;
  const isPasswordValid = await bcrypt.compare(combinedPassword, user.password);

  if (!isPasswordValid) {
    throw new HttpError('Username or password is incorrect', 401);
  }

  const token = jwt.sign(
    { userId: user.userId, userName: user.userName },
    process.env.JWT_SECRET!,
    { expiresIn: '1h' }
  );

  return {
    message: 'Login Successful',
    userId: user.userId,
    token,
  };
};