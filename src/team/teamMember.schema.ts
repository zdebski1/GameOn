export const createTeamMemberSchema = {
  body: {
    type: 'object',
    required: ['userFk', 'createdBy'],
    properties: {
      userFk: { type: 'number' },
      createdBy: { type: 'number' },
    },
    errorMessage: {
      required: {
        userFk: 'userFk is required',
        createdBy: 'Email is required',
      },
    },
  },
  params: {
    type: 'object',
    required: ['teamId'],
    properties: {
      teamId: { type: 'string', minLength: 1 },
    },
    errorMessage: {
      required: {
        teamId: 'teamId is required in the URL',
      },
    },
  },
};
