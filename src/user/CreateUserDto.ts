export interface CreateUserDTO {
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    birthdate: Date;
    steamAccountId?: string | null;
    isActive: boolean;
  }
  