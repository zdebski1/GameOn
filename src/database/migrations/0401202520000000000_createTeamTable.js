exports.up = function(knex) {
    return knex.schema.createTable('team', function(table) {
      table.increments('teamId').primary();
      table.string('teamName');
      table.boolean('isActive');           
      table.timestamp('createdDateTime').defaultTo(knex.fn.now());
      table.string('createdBy');
      table.timestamp('updatedDateTime').defaultTo(knex.fn.now());
      table.string('updatedBy');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('team');
  };