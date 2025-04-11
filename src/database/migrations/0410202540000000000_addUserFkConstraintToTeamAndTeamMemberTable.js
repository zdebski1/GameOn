exports.up = function(knex) {
  return Promise.all([  
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

      table
        .foreign('teamFk')
        .references('teamId')
        .inTable('team')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
          
      table
        .foreign('userFk')
        .references('userId')
        .inTable('user')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');          
      }),     
    ]);
  };
  
  exports.down = function(knex) {
    return Promise.all([
      knex.schema.alterTable('team', function (table) {
        table.dropForeign('createdBy');
        table.dropForeign('updatedBy');
    }),
      knex.schema.alterTable('teamMember', function (table) {
        table.dropForeign('createdBy');
        table.dropForeign('updatedBy');
        table.dropForeign('userFk');
        table.dropForeign('teamFk');        
    }),
  ]);
};