const knex = require('../database/connection');

class Person{
    
    //criação de personagem
    async criar(autor,titulo,conteudo){
        let date = new Date()
        await knex.insert({autor,titulo,conteudo,date}).table('personagens').then(response=>{
            return {status:1}
        }).catch(err=>{
            console.log(error)
            return {status:0}
        })
    }

    //listar personagem // para litar todos passar id = false
    async listar(id){
        let result
        if (id){
            await knex.select('').from('personagens').where({id:id}).table('personagens').then(response=>{
                console.log(response)
                return {status:1,response:response}
            }).catch(error=>{
                console.log(error)
                return {status:0}
            })

        }else{
            await knex.select('').from('personagens').table('personagens').then(response=>{
                console.log(response)
                return {status:1,response:response}
            }).catch(error=>{
                console.log(error)
                return {status:0}
            })
        }
    }

    //editar personagem
    async update(id,autor,titulo,conteudo){
        await knex.update({autor,titulo,conteudo}).where({id:id}).table('personagens').then(response=>{
            console.log(response)
            return {status:1,response:response}
        }).catch(error=>{
            console.log(error)
            return {status:0}
        })
    }

    //deletar personagem
    async delete(id){
        await knex.delete().from('personagens').where({id:id}).then(response=>{
            console.log(response)
            return {status:1,response:response}
        }).catch(error=>{
            console.log(error)
            return {status:0}
        })
    }

}
module.exports = new Person()