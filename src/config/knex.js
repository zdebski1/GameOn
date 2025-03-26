const pg = require('knex')({
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'Admin',
      database: 'GameOn',
      password: 'abc123',
    },
  });