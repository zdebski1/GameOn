export const createTeamSchema = {
  body: {
    type: "object",
    required: ["teamName"],
    properties: {
      teamName: { type: "string", minLength: 1 }
    },
    errorMessage: {
      required: {
        teamName: "teamName is required"
      },
    },
  },
  params: {
    type: "object",
    required: ["userId"],
    properties: {
      teamId: { type: "string", minLength: 1 },
    },
    errorMessage: {
      required: {
        teamId: "userId is required in the URL",
      },
    },
  },
};
