import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { HttpError } from "../utils/httpError";
import { AuthenticateRequestDto } from "./dto";
import { getUserByUserName } from "../user/repository";

export async function AuthenticateService(authenticateRequestDto: AuthenticateRequestDto) {
  const user = await getUserByUserName(authenticateRequestDto.userName);

  if (!user) {
    throw new HttpError("Username or password is incorrect", 401);
  }

  if (!user.isEmailVerified && !user.isPhoneNumberVerified) {
    throw new HttpError("User not verified", 403);
  }

  const combinedPassword = authenticateRequestDto.password + user.uuid;
  const isPasswordValid = await bcrypt.compare(combinedPassword, user.password);

  if (!isPasswordValid) {
    throw new HttpError("Username or password is incorrect", 401);
  }

  let role: string;
  if (user.isAdmin) {
     role = 'admin';
  } else {
     role = 'user';
  }

  const token = jwt.sign(
    { userId: user.userId, userName: user.userName, role },
    process.env.JWT_SECRET!,
    { expiresIn: "24h" }
  );

  return {
    message: "Login Successful",
    userId: user.userId,
    token,
  };
}
