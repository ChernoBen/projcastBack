const knex = require('../database/connection');

class Person {

    //criação de personagem
    async criar(autor, titulo, conteudo) {
        let date = new Date()
        let result = await knex.insert({ autor, titulo, conteudo, date }).table('personagens').catch(err => {
            console.log(error)
            return { status: 0 }
        })
        return { status: 1, result: result }
    }

    //listar personagem // para litar todos passar id = false
    async listar(id) {
        let result
        if (id) {
            result = await knex.select(['id', 'titulo', 'autor', 'conteudo', 'date']).from('personagens').where({ id: id }).table('personagens').catch(error => {
                console.log(error)
                return { status: 0 }
            })
            return { status: 1, response: result }

        } else {
            result = await knex.select(['id', 'titulo', 'autor', 'conteudo', 'date']).from('personagens').table('personagens').catch(error => {
                console.log(error)
                return { status: 0 }
            })
            return { status: 1, response: result }
        }
    }

    //editar personagem
    async update(id, autor, titulo, conteudo) {
        let result = await knex.update({ autor, titulo, conteudo }).where({ id: id }).table('personagens').catch(error => {
            console.log(error)
            return { status: 0 }
        })

        return { status: 1, response: result }
    }

    //deletar personagem
    async delete(id) {
        let result = await knex.delete().from('personagens').where({ id: id }).catch(error => {
            console.log(error)
            return { status: 0 }
        })
        return { status: 1, response: result }
    }

}
module.exports = new Person()