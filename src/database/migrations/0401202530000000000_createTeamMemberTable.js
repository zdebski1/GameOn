exports.up = function(knex) {
    return knex.schema.createTable('teamMember', function(table) {
      table.increments('teamMemberId').primary();
      table.integer('userFk').unsigned();
      table.boolean('isActive');
      table.integer('teamFk')
      table.timestamp('createdDateTime').defaultTo(knex.fn.now());
      table.integer('createdBy').unsigned();
      table.timestamp('updatedDateTime');
      table.integer('updatedBy').unsigned();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('teamMember');
  };