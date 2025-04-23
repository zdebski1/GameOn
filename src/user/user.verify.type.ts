import {
    CreateUserVerifyDto,
    CreateSendVerifyEmailDto,
  } from "./user.verify.dto";
  
  export interface CreateUserVerifyRoute {
    Body: CreateUserVerifyDto;
  }
  
  export interface CreateSendEmailVerifyRoute {
    Body: CreateSendVerifyEmailDto;
  }
  