exports.up = function (knex) {
    return knex.schema.alterTable('team', function (table) {
        table.dropColumn('teamName');
        table.integer("teamNameFk");
        table.integer("teamMemberFk");
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.alterTable('team', function (table) {
      table.string('teamName');
      table.integer("teamNameFk");
      table.integer("teamMemberFk");      
    });
  };