export interface UpdateVerifyDto {
  email: string;
  emailVerificationCode: string;
}

export interface UpdateEmailCodeAndTimeDto {
  userId: number;
  emailVerificationCode: string;
  emailVerificationExpiresAt: Date;
  updatedBy: number;
  updatedDateTime: Date;
}

export interface UpdateEmailVerifiedStatusDto {
  userId: number;
  updatedBy: number;
  updatedDateTime: Date;
}

export interface CreateVerifyEmailDto {
  email: string;
}
