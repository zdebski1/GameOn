import { BlobOptions } from "buffer";

export interface IUserModel {
    userId?: number;
    userName: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
    isAdmin: boolean;
    dateRegistered: Date;
    createdBy: number;
    updatedDateTime?: Date | null ;
    updatedBy?: number | null ;
  }