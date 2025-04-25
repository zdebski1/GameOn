exports.up = function(knex) {
    return knex.schema.createTable('teamMember', function(table) {
      table.increments('teamMemberId').primary();
      table.integer('userFk').unsigned().notNullable().references('userId').inTable('user').onDelete('RESTRICT').onUpdate('CASCADE');
      table.boolean('isActive').notNullable();
      table.integer('teamFk').notNullable().references('teamId').inTable('team').onDelete('RESTRICT').onUpdate('CASCADE');
      table.timestamp('createdDateTime').defaultTo(knex.fn.now()).notNullable();
      table.integer('createdBy').unsigned().notNullable().references('userId').inTable('user').onDelete('RESTRICT').onUpdate('CASCADE');
      table.timestamp('updatedDateTime');
      table.integer('updatedBy').unsigned().references('userId').inTable('user').onDelete('RESTRICT').onUpdate('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('teamMember');
  };