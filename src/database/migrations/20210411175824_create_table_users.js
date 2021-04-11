
exports.up = function(knex) {
  return knex.schema.createTable('users',function(table){
    table.increments('id')
    table.text('nome')
    table.text('email')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
