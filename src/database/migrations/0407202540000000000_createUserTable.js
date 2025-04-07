exports.up = function(knex) {
    return knex.schema.createTable('user', function(table) {
      table.increments('userId').primary();
      table.string('userName');
      table.string('password');
      table.string('email');
      table.timestamp('createdDateTime').defaultTo(knex.fn.now());
      table.string('createdBy');
      table.timestamp('updatedDateTime');
      table.string('updatedBy');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('user');
  };