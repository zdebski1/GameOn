exports.up = function(knex) {
    return knex.schema.createTable('availability', function(table) {
      table.increments('availabilityId').primary();
      table.integer('gameNameFk');
      table.integer('teamFk');
      table.timestamp('availableDateTime');
      table.timestamp('createdDateTime').defaultTo(knex.fn.now());
      table.integer('createdBy');
      table.timestamp('updatedDateTime');
      table.integer('updatedBy');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('availability');
  };