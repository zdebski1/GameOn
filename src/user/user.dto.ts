export interface CreateUserDTO {
  password: string;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
}

export interface SendEmailToUserDto {
  to: string;
  from: string;
  subject: string;
  body: string;
}
