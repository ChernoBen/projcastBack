const knex = require('../database/connection');

class User {

    async create(nome,email){
        await knex.insert({nome,email}).table('users').then(response=>{
            console.log(response)
            return {status:1,response:response}
        }).catch(error=>{
            console.log(error)
            return {status:0}
        })
    }
}
module.exports = new User()