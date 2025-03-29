exports.up = function (knex) {
    return knex.schema.alterTable('teamMember', function (table) {
        table.integer('isActiveMember');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.alterTable('teamMember', function (table) {
      table.string('isActiveMember');
    });
  };