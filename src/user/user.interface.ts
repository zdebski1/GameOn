export interface IUserModel {
    userId?: number;
    userName: string;
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
    createdBy: number;
    updatedDateTime?: Date | null ;
    updatedBy?: number | null ;
  }