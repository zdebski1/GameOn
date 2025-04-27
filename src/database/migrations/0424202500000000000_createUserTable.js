exports.up = function(knex) {
    return knex.schema.createTable('user', function(table) {
      table.increments('userId').primary();
      table.string('userName').notNullable();      
      table.string('password').notNullable();
      table.string('email');
      table.string('phoneNumber');
      table.string('firstName').notNullable();
      table.string('lastName').notNullable();
      table.boolean('isActive').notNullable();
      table.boolean('isAdmin').notNullable();
      table.boolean('isEmailVerified').notNullable();
      table.boolean('isPhoneNumberVerified').notNullable();      
      table.string('profilePictureUrl');
      table.string('uuid').notNullable();
      table.string('emailVerificationCode');
      table.timestamp('emailVerificationExpiresAt');
      table.timestamp('createdDateTime').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updatedDateTime');
      table.integer('updatedBy');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('user');
  };