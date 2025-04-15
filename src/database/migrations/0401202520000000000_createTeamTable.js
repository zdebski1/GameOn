exports.up = function(knex) {
    return knex.schema.createTable('team', function(table) {
      table.increments('teamId').primary();
      table.string('teamName');
      table.boolean('isActive');
      table.boolean('isOwner');          
      table.timestamp('createdDateTime').defaultTo(knex.fn.now());
      table.integer('createdBy').unsigned();
      table.timestamp('updatedDateTime');
      table.integer('updatedBy').unsigned();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('team');
  };