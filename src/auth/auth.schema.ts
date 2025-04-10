export const loginSchema = {
    body: {
        type: 'object',
        required: ['userName', 'password'],
        properties: {
          userName: { type: 'string'},
          password: { type: 'string'}
      },
    }
  };