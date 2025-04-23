import { User } from "../models";
import {
  UpdateEmailCodeAndTimeDto,
  UpdateEmailVerifiedStatusDto,
} from "./verification.dto";

export async function updateUserEmailVerifiedStatus(
  updateUserEmailVerifiedStatusDto: UpdateEmailVerifiedStatusDto
) {
  await User.update(
    {
      isEmailVerified: true,
      updatedBy: updateUserEmailVerifiedStatusDto.updatedBy,
      updatedDateTime: updateUserEmailVerifiedStatusDto.updatedDateTime,
    },
    {
      where: { userId: updateUserEmailVerifiedStatusDto.userId },
    }
  );
}

export async function updateEmailCodeAndTime(
  updateEmailCodeAndTimeDto: UpdateEmailCodeAndTimeDto
) {
  await User.update(
    {
      emailVerificationCode: updateEmailCodeAndTimeDto.emailVerificationCode,
      emailVerificationExpiresAt:
        updateEmailCodeAndTimeDto.emailVerificationExpiresAt,
      updatedBy: updateEmailCodeAndTimeDto.updatedBy,
      updatedDateTime: updateEmailCodeAndTimeDto.updatedDateTime,
    },
    {
      where: { userId: updateEmailCodeAndTimeDto.userId },
    }
  );
}
