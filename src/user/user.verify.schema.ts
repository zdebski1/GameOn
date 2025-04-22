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
  params: {
    type: "object",
    required: ["userId"],
    properties: {
      userId: { type: "string", minLength: 1, maxLength: 32 },
    },
    errorMessage: {
      required: {
        userId: "userId is required in the URL",
      },
    },
  },
};

export const resendUserEmailVerificationSchema = {
  params: {
    type: "object",
    required: ["userId"],
    properties: {
      userId: { type: "string", minLength: 1, maxLength: 32 },
    },
    errorMessage: {
      required: {
        userId: "userId is required in the URL",
      },
    },
  },
};
