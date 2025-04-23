export interface IUserModel {
  userId?: number;
  password: string;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  isAdmin: boolean;
  isEmailVerified: boolean;
  isPhoneNumberVerified: boolean;
  profilePictureUrl: string | null;
  uuid: string;
  emailVerificationCode: string;
  emailVerificationExpiresAt: Date;
  createdDateTime: Date;
  updatedDateTime?: Date | null;
  updatedBy?: number | null;
}
