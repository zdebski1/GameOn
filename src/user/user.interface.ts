export interface IUserModel {
    userId?: number;
    userName: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
    dateRegistered: Date;
    createdBy: string;
    updatedDateTime?: Date | null ;
    updatedBy?: string | null ;
  }