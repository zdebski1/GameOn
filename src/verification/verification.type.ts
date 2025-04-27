import {
    VerifyDto
  } from "./verification.dto";
  
  export interface UpdateVerifyRoute {
    Body: VerifyDto;
    Params: {emailVerificationCode: string}
  }
  
  export interface CreateEmailVerifyRoute {
    Body: VerifyDto;
  }
  