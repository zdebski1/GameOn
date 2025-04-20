import { HttpError } from "../utils/httpError";
import { findUserByEmail, findUserByUserId } from "./user.repository";
import { CreateUserVerifyDto } from "./user.verify.dto";
import { updateUserEmailVerifiedStatus } from "./user.verify.repository";

export async function createUserEmailVerifyService(createUserVerifyDto: CreateUserVerifyDto) {
    const {
        userId,
        emailVerificationCode
    } = createUserVerifyDto;

    const user = await findUserByUserId(userId)
    const nowDateTime: Date = new Date;

    if (!user){
        throw new HttpError('User Does not exist', 404);
    }

    if (user.emailVerificationExpiresAt < nowDateTime){
        throw new HttpError('Verification code has expired', 400);
    }

    if (user.emailVerificationCode !== emailVerificationCode){
        throw new HttpError('Invalid verification code', 401);
    }

    if (user.isEmailVerified == true){
        throw new HttpError('Email already verified', 400);
    }

    await updateUserEmailVerifiedStatus(user.userId);
    
    return {
        message: 'Email Verified Successfully'
    }
}