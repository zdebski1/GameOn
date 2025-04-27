export interface VerifyDto {
  userId?: number;
  email: string,
  emailVerificationCode?: string;
  emailVerificationExpiresAt?: Date;
  updatedBy?: number;
  updatedDateTime?: Date;
}