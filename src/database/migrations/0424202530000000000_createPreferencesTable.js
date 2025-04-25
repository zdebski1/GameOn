exports.up = function(knex) {
  return knex.schema.createTable('preferences', function(table) {
    table.increments('preferenceId').primary();
    table.integer('userFk').unsigned().notNullable().references('userId').inTable('user').onDelete('RESTRICT').onUpdate('CASCADE');
    table.boolean('allowSmsNotifications').notNullable();
    table.boolean('allowEmailNotifications').notNullable();
    table.boolean('marketingOptIn').notNullable();
    table.timestamp('createdDate').defaultTo(knex.fn.now()).notNullable();
    table.integer('createdBy').unsigned().notNullable().references('userId').inTable('user').onDelete('RESTRICT').onUpdate('CASCADE');
    table.timestamp('updatedDateTime');
    table.integer('updatedBy').unsigned().references('userId').inTable('user').onDelete('RESTRICT').onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('preferences');
};
