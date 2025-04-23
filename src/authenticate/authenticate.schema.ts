export const AuthenticateSchema = {
  body: {
    type: "object",
    required: ["email", "password"],
    properties: {
      password: { type: "string" },
      email: { type: "string" },
    },
  },
};
