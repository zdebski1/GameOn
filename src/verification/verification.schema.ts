export const updateEmailVerificationSchema = {
  body: {
    type: "object",
    required: ["userName","email"],
    properties: {
      userName: { type: "string"},      
      email: { type: "string", format: "email" },
    },
    errorMessage: {
      required: {
        userName: "UserName is required",
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
    required: ["userName","email"],
    properties: {
      userName: { type: "string"},      
      email: { type: "string", format: "email" },
    },
    errorMessage: {
      required: {
        userName: "UserName is required",
        email: "Email is required"
      },
    },
  },
};
