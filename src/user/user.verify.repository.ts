import User from "./user.model";
import { UpdateEmailCodeAndTimeDto } from "./user.verify.dto";

export async function updateUserEmailVerifiedStatus(userId: number) {
  await User.update(
    {
      isEmailVerified: true
    },
    {
      where: { userId },
    }
  );
}

export async function updateEmailCodeAndTime(updateEmailCodeAndTimeDto: UpdateEmailCodeAndTimeDto) {
  await User.update(
    {
      emailVerificationCode: updateEmailCodeAndTimeDto.emailVerificationCode,
      emailVerificationExpiresAt: updateEmailCodeAndTimeDto.emailVerificationExpiresAt,
      updatedBy: updateEmailCodeAndTimeDto.updatedBy,
      updatedDateTime: updateEmailCodeAndTimeDto.updatedDateTime
    },
    {
      where: { userId: updateEmailCodeAndTimeDto.userId }
    }
  );
}