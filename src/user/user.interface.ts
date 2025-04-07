export interface IUserModel {
    userId?: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    birthdate: Date;
    steamAccountId?: string | null;
    isActive: boolean;
    createdDateTime: Date;
    createdBy: string;
    updatedDateTime?: Date | null ;
    updatedBy?: string | null ;
  }
  