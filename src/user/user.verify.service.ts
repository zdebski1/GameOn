import { fromEmail } from "../utils/globalVariables";
import {
  addMinutesToDateTime,
  generateRandomNumber,
} from "../utils/helperFunctions";
import { HttpError } from "../utils/httpError";
import { sendEmail } from "../utils/sendEmail";
import { findUserByEmail } from "./user.repository";
import { CreateUserVerifyDto } from "./user.verify.dto";
import {
  updateEmailCodeAndTime,
  updateUserEmailVerifiedStatus,
} from "./user.verify.repository";

export async function createUserEmailVerifyService(
  createUserVerifyDto: CreateUserVerifyDto
) {
  const { email, emailVerificationCode } = createUserVerifyDto;

  const user = await findUserByEmail(email);
  const nowDateTime: Date = new Date();

  if (!user) {
    throw new HttpError("User Does not exist", 404);
  }

  if (user.emailVerificationExpiresAt < nowDateTime) {
    throw new HttpError("Verification code has expired", 400);
  }

  if (user.emailVerificationCode !== emailVerificationCode) {
    throw new HttpError("Invalid verification code", 401);
  }

  if (user.isEmailVerified == true) {
    throw new HttpError("Email already verified", 400);
  }
  const updateUserEmailVerifiedStatusDto = {
    userId: user.userId,
    updatedBy: user.userId,
    updatedDateTime: new Date(),
  };

  await updateUserEmailVerifiedStatus(updateUserEmailVerifiedStatusDto);

  return {
    message: "Email Verified Successfully",
  };
}

export async function sendVerificationCodeToEmail(email: string) {
  try {
    const existingUser = await findUserByEmail(email);

    if (!existingUser) {
      throw new HttpError("User does not exist", 404);
    }

    const emailVerificationCode = (
      await generateRandomNumber(100000, 900000)
    ).toString();
    const emailVerificationExpiresAt = addMinutesToDateTime(new Date(), 5);

    const emailSubject = `GameOn Verification Code: ${emailVerificationCode}`;
    const emailBody = `GameOn verification code: ${emailVerificationCode}`;

    const sendEmailToUserDto = {
      to: existingUser.email,
      from: fromEmail,
      subject: emailSubject,
      body: emailBody,
    };

    const updateEmailCodeAndTimeDto = {
      userId: existingUser.userId,
      emailVerificationCode: emailVerificationCode,
      emailVerificationExpiresAt: emailVerificationExpiresAt,
      updatedBy: existingUser.userId,
      updatedDateTime: new Date(),
    };

    await sendEmail(sendEmailToUserDto);

    await updateEmailCodeAndTime(updateEmailCodeAndTimeDto);
  } catch (error) {
    throw error;
  }
}
