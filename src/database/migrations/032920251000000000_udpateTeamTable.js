exports.up = function (knex) {
    return knex.schema.alterTable('team', function (table) {
        table.dropColumn('teamMember');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.alterTable('team', function (table) {
      table.string('teamMember');
    });
  };
  