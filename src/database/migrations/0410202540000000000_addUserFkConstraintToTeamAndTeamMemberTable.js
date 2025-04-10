exports.up = function(knex) {
  return Promise.all([  
    
    knex.schema.alterTable('teamMember', function(table) {
      table
        .foreign('userFk')
        .references('userId')
        .inTable('user')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      }),

      knex.schema.alterTable('team', function (table) {
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
      }),

    knex.schema.alterTable('teamMember', function (table) {
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
      }),
    ]);
  };
  
  exports.down = function(knex) {
    return Promise.all([
      knex.schema.alterTable('teamMember', function(table) {
      table.dropForeign('userFk');
    }),
      knex.schema.alterTable('team', function (table) {
        table.dropForeign('createdBy');
        table.dropForeign('updatedBy');
    }),
      knex.schema.alterTable('teamMember', function (table) {
        table.dropForeign('createdBy');
        table.dropForeign('updatedBy');
    }),
  ]);
};