exports.up = function (knex) {
    return knex.schema.alterTable('team', function (table) {
      table.renameColumn('teamId', 'teamId');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.alterTable('team', function (table) {
      table.renameColumn('teamId', 'teamNameId');
    });
  };
  