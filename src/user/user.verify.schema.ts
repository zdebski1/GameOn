export const createUserEmailVerificationSchema = {
  body: {
    type: "object",
    required: ["email", "emailVerificationCode"],
    properties: {
      email: { type: "string", format: "email" },
      emailVerificationCode: { type: "string", minLength: 1, maxLength: 32 },
    },
    errorMessage: {
      required: {
        email: "Email is required",
        emailVerificationCode: "EmailVerificationCode is required",
      },
    },
  },
};

export const createUserSendEmailVerificationSchema = {
  body: {
    type: "object",
    required: ["email"],
    properties: {
      email: { type: "string", format: "email" },
    },
    errorMessage: {
      required: {
        email: "Email is required",
      },
    },
  },
};
