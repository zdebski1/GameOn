exports.up = function (knex) {
    return knex.schema.alterTable('teamMember', function (table) {
        table.integer('teamNameFk');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.alterTable('teamMember', function (table) {
      table.string('teamNameFk');
    });
  };