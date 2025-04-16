exports.up = function(knex) {
    return knex.schema.createTable('user', function(table) {
      table.increments('userId').primary();
      table.string('userName');
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
      table.string('uuid')
      table.timestamp('dateRegistered').defaultTo(knex.fn.now());
      table.integer('createdBy');
      table.timestamp('updatedDateTime');
      table.integer('updatedBy');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('user');
  };