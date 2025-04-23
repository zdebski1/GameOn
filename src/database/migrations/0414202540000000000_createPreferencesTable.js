exports.up = function(knex) {
  return knex.schema.createTable('preferences', function(table) {
    table.increments('userPreferenceId').primary();
    table.integer('userFk').unsigned().notNullable();
    table.boolean('allowSmsNotifications');
    table.boolean('allowEmailNotifications');
    table.boolean('marketingOptIn');
    table.timestamp('createdDate').defaultTo(knex.fn.now());
    table.integer('createdBy').unsigned();
    table.timestamp('updatedDateTime');
    table.integer('updatedBy').unsigned();

    table
      .foreign('userFk')
      .references('userId')
      .inTable('user')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

    table
      .foreign('createdBy')
      .references('userId')
      .inTable('user')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

      table
      .foreign('updatedBy')
      .references('userId')
      .inTable('user')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');      
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('preferences');
};
