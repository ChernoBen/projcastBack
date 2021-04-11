
exports.up = function(knex) {
    return knex.schema.createTable('token',function(table){
        table.integer('user').unsigned().references("id").inTable("users")
        table.integer("used").defaultTo(0)
        table.string("token").defaultTo(knex.fn.now())
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("token")
};
