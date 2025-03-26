exports.up = function (knex) {
    return knex.schema.alterTable('availability', function (table) {
      table.dropColumn('availableDate');
      table.dropColumn('availableTime');
      table.timestamp('availableDateTime');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.alterTable('availability', function (table) {
      table.date('availableDate');
      table.time('availableTime');
      table.dropColumn('availableDateTime');
    });
  };
  