import { User } from "../models";
import {
  VerifyDto
} from "./dto";

export async function updateUserEmailVerifiedStatus(
  verifyDto: VerifyDto
) {
  await User.update(
    {
      isEmailVerified: true,
      updatedBy: verifyDto.updatedBy,
      updatedDateTime: verifyDto.updatedDateTime,
    },
    {
      where: { userId: verifyDto.userId },
    }
  );
}

export async function updateEmailCodeAndTime(
  verifyDto: VerifyDto
) {
  await User.update(
    {
      emailVerificationCode: verifyDto.emailVerificationCode,
      emailVerificationExpiresAt: verifyDto.emailVerificationExpiresAt,
      updatedBy: verifyDto.updatedBy,
      updatedDateTime: verifyDto.updatedDateTime,
    },
    {
      where: { userId: verifyDto.userId },
    }
  );
}
