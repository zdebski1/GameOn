import User from "./user.model";

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