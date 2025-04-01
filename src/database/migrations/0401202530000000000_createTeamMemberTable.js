exports.up = function(knex) {
    return knex.schema.createTable('teamMember', function(table) {
      table.increments('teamMemberId').primary();
      table.integer('userFk');
      table.boolean('isActive');
      table.integer('teamFk')
      table.timestamp('createdDateTime').defaultTo(knex.fn.now());
      table.string('createdBy');
      table.timestamp('updatedDateTime');
      table.string('updatedBy');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('teamMember');
  };