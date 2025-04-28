export const createTeamSchema = {
  body: {
    type: "object",
    required: ["teamName"],
    properties: {
      teamName: { type: "string", minLength: 1 },
    },
    errorMessage: {
      required: {
        teamName: "teamName is required",
      },
    },
  },
};
