exports.up = function(knex) {
    return knex.schema.createTable('availability', function(table) {
      table.increments('id').primary();
      table.integer('gameNameFk');
      table.date('availableDate');
      table.time('availableTime');
      table.timestamp('createdDateTime').defaultTo(knex.fn.now());
      table.string('createdBy');
      table.timestamp('updatedDateTime').defaultTo(knex.fn.now());
      table.string('updatedBy');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('availability');
  };