exports.up = function(knex) {
    return knex.schema.createTable('team', function(table) {
      table.increments('teamNameId').primary();
      table.string('teamName');
      table.string('teamMember');      
      table.timestamp('createdDateTime').defaultTo(knex.fn.now());
      table.string('createdBy');
      table.timestamp('updatedDateTime').defaultTo(knex.fn.now());
      table.string('updatedBy');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('team');
  };