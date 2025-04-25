exports.up = function(knex) {
  return knex.schema.createTable('availability', function(table) {
    table.increments('availabilityId').primary();
    table.integer('teamFk').unsigned().references('teamId').inTable('team').onDelete('CASCADE');
    table.integer('teamMemberFk').unsigned().references('teamMemberId').inTable('teamMember').onDelete('CASCADE');
    table.date('availableDate').notNullable();
    table.timestamp('startDateTime').notNullable();
    table.timestamp('endDateTime').notNullable();
    table.timestamp('createdDateTime').defaultTo(knex.fn.now());
    table.integer('createdBy').unsigned();
    table.timestamp('updatedDateTime');
    table.integer('updatedBy').unsigned();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('availability');
};
