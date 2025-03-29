exports.up = function (knex) {
    return knex.schema.alterTable('teamName', function (table) {
        table.integer('isActiveTeam');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.alterTable('teamName', function (table) {
      table.string('isActiveTeam');
    });
  };