import {
    UpdateVerifyDto,
    CreateVerifyEmailDto,
  } from "./verification.dto";
  
  export interface UpdateVerifyRoute {
    Body: UpdateVerifyDto;
    Params: {emailVerificationCode: string}
  }
  
  export interface CreateEmailVerifyRoute {
    Body: CreateVerifyEmailDto;
  }
  