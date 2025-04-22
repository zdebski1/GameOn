export const createTeamSchema = {
  body: {
    type: 'object',
    required: ['teamName', 'isOwner'],
    properties: {
      teamName: { type: 'string', minLength: 1 },
      isOwner: { type: 'boolean' }
    },
    errorMessage: {
      required: {
        teamName: 'teamName is required',
        isOwner: 'isOwner is required'
      },
    },
  },
  params: {
    type: 'object',
    required: ['userId'],
    properties: {
      teamId: { type: 'string', minLength: 1 },
    },
    errorMessage: {
      required: {
        teamId: 'userId is required in the URL',
      },
    },
  },
};