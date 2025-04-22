export const createUserEmailVerificationSchema = {
  body: {
    type: "object",
    required: ["emailVerificationCode"],
    properties: {
      emailVerificationCode: { type: "string", minLength: 1, maxLength: 32 },
    },
    errorMessage: {
      required: {
        emailVerificationCode: "EmailVerificationCode is required",
      },
    },
  },
};
