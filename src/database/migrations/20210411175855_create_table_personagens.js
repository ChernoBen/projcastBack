//roda sempre que eu pedir pra rodar migrations/cria banco
exports.up = function(knex) {
  return knex.schema.createTable('personagens',function(table){
    table.increments('id')
    table.integer('autor').unsigned().references("id").inTable('users')
    table.text('titulo')
    table.text('conteudo')
    table.timestamp('date').defaultTo(knex.fn.now())

  })
};

//roolback função de execução de backup
exports.down = function(knex) {
  return knex.schema.dropTable('personagens')
};
