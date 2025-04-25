exports.up = function(knex) {
    return knex.schema.createTable('team', function(table) {
      table.increments('teamId').primary();
      table.string('teamName').notNullable();
      table.boolean('isActive').notNullable();
      table.boolean('isOwner').notNullable();          
      table.timestamp('createdDateTime').defaultTo(knex.fn.now()).notNullable();
      table.integer('createdBy').unsigned().notNullable().references('userId').inTable('user').onDelete('RESTRICT').onUpdate('CASCADE');
      table.timestamp('updatedDateTime');
      table.integer('updatedBy').unsigned().references('userId').inTable('user').onDelete('RESTRICT').onUpdate('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('team');
  };