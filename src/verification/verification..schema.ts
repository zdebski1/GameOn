export const updateEmailVerificationSchema = {
  body: {
    type: "object",
    required: ["email"],
    properties: {
      email: { type: "string", format: "email" },
    },
    errorMessage: {
      required: {
        email: "Email is required"
      },
    },
  },
  params: {
    type: "object",
    required: ["emailVerificationCode"],
    properties: {
      emailVerificationCode: { type: "string", minLength: 1, maxLength: 32 },
    },
    errorMessage: {
      required: {
        emailVerificationCode: "emailVerificationCode is required in url"
      },
    },

  }
};

export const createEmailVerificationSchema = {
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
