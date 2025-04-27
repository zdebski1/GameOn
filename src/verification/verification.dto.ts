export interface VerifyDto {
  userId?: number;
  userName: string;
  email: string,
  emailVerificationCode?: string;
  emailVerificationExpiresAt?: Date;
  updatedBy?: number;
  updatedDateTime?: Date;
}