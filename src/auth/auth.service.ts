import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { HttpError } from "../utils/httpError";
import { LoginRequestDto } from './auth.dto';
import { findUserByEmail } from '../user/user.repository';

export async function loginService (loginRequestDto: LoginRequestDto) {

  const user = await findUserByEmail(loginRequestDto.email);

  if (!user) {
    throw new HttpError('Username or password is incorrect', 401);
  }

  const combinedPassword = loginRequestDto.password + user.uuid;
  const isPasswordValid = await bcrypt.compare(combinedPassword, user.password);

  if (!isPasswordValid) {
    throw new HttpError('Username or password is incorrect', 401);
  }

  const token = jwt.sign(
    { userId: user.userId, userName: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: '1h' }
  );

  return {
    message: 'Login Successful',
    userId: user.userId,
    token,
  };
};