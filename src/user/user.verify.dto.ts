export interface CreateUserVerifyDto {
    userId: number;
    emailVerificationCode: string
}

export interface UpdateEmailCodeAndTimeDto {
    userId: number,
    emailVerificationCode: string,
    emailVerificationExpiresAt: Date,
    updatedBy: number,
    updatedDateTime: Date
}