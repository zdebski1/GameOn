import User from "./user.model";
import {
  UpdateEmailCodeAndTimeDto,
  UpdateUserEmailVerifiedStatusDto,
} from "./user.verify.dto";

export async function updateUserEmailVerifiedStatus(
  updateUserEmailVerifiedStatusDto: UpdateUserEmailVerifiedStatusDto
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
