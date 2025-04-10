export const createTeamSchema = {
    body: {
      type: 'object',
      required: ['teamName','isOwner','createdBy'],
      properties: {
        teamName: { type: 'string', minLength: 1 },
        isOwner: {type:'boolean'},
        createdBy: { type: 'number' },
      },
      errorMessage: {
        required: {
            teamName: 'teamName is required',
            isOwner: 'isOwner is required',
            createdBy: 'createdBy is required',            
        },
      },
    }
  };
  