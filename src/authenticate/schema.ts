export const AuthenticateSchema = {
  body: {
    type: "object",
    required: ["userName", "password"],
    properties: {
      userName: { type: "string" },
      password: { type: "string" },
    },
  },
};
