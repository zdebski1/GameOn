exports.up = function (knex){
return knex.schema.alterTable('availability', function (table) {
    table.integer('teamIdFk');
    });
};

exports.down = function (knex) {
  return knex.schema.alterTable('availability', function (table) {
    table.dropColumn('teamIdFk');
  });
};