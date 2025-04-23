exports.up = function(knex) {
    return knex.schema.createTable('user', function(table) {
      table.increments('userId').primary();
      table.string('password');
      table.string('email');
      table.string('phoneNumber');
      table.string('firstName');
      table.string('lastName');
      table.boolean('isActive');
      table.boolean('isAdmin');
      table.boolean('isEmailVerified');
      table.boolean('isPhoneNumberVerified');      
      table.string('profilePictureUrl');
      table.string('uuid');
      table.string('emailVerificationCode');
      table.timestamp('emailVerificationExpiresAt');
      table.timestamp('createdDateTime').defaultTo(knex.fn.now());
      table.timestamp('updatedDateTime');
      table.integer('updatedBy');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('user');
  };