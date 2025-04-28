export interface UserDTO {
  userName: string;
  password: string;
  email: string;
  phoneNumber?: string;
  firstName: string;
  lastName: string;
}

export interface EmailDto {
  to: string;
  from: string;
  subject: string;
  body: string;
}