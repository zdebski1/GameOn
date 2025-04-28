import { fromEmail } from "../utils/globalVariables";
import {
  addMinutesToDateTime,
  generateRandomNumber,
} from "../utils/helperFunctions";
import { HttpError } from "../utils/httpError";
import { sendEmail } from "../utils/sendEmail";
import { getUserByEmail, getUserByUserName } from "../user/repository";
import { VerifyDto } from "./dto";
import {
  updateEmailCodeAndTime,
  updateUserEmailVerifiedStatus,
} from "./repository";

export async function updateEmailVerification (
  verifyDto: VerifyDto
) {

  const existingUser = await getUserByUserName(verifyDto.userName);

  const localDate = new Date();
  const utcDate = new Date(localDate.toISOString());

  if (!existingUser) {
    throw new HttpError("User Does not exist", 404);
  }

  console.log(existingUser.emailVerificationExpiresAt, utcDate)

  if (existingUser.emailVerificationExpiresAt < utcDate) {
    throw new HttpError("Verification code has expired", 400);
  }

  if (existingUser.emailVerificationCode !== verifyDto.emailVerificationCode) {
    throw new HttpError("Invalid verification code", 401);
  }

  if (existingUser.isEmailVerified == true) {
    throw new HttpError("Email already verified", 400);
  }
  const updateUserEmailVerifiedStatusDto = {
    userId: existingUser.userId,
    userName: existingUser.userName,
    email: existingUser.email,
    updatedBy: existingUser.userId,
    updatedDateTime: new Date(),
  };

  await updateUserEmailVerifiedStatus(updateUserEmailVerifiedStatusDto);

  return {
    message: "Email Verified Successfully",
  };
}

export async function createEmailVerification (verifyDto: VerifyDto) {
  try {
    const existingUser = await getUserByUserName(verifyDto.userName);

    if (!existingUser) {
      throw new HttpError("User does not exist", 404);
    }

    const emailVerificationCode = (
      await generateRandomNumber(100000, 900000)
    ).toString();

    const localDate = new Date();
    const utcDate = new Date(localDate.toISOString());

    const emailVerificationExpiresAt = addMinutesToDateTime(utcDate, 15);

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
      userName: existingUser.userName,
      email: existingUser.email,
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
