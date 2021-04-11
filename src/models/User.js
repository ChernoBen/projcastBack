const knex = require('../database/connection');
const bcrypt = require("bcrypt")
const PasswordToken = require("./PasswordToken")

class User {

    async create(email, senha, nome) {

        var hash = await bcrypt.hash(senha, 10).catch(error => {

            console.log(error)
        });

        let result = await knex.insert({ email, senha: hash, nome}).table("users").catch(err => {

            console.log(err)
        })
        return {status:1,response:result}

    }
    
    async findByEmail(email){
        
        var result = await knex.select("email").from("users").where({ email: email }).catch(err => {

            console.log(err)

        })

        if (result.length > 0) {

            return true

        } else {

            return false
        }
    }

    async findByName(nome){
        let result = await knex.select(['id','nome','email']).where({nome:nome}).table('users').catch(error=>{
            console.log(error)
            return {status:0}
        })
        return {status:1,response:result}
    }
    
    async findAll(){
        let result = await knex.select(['id','nome','email']).table('users').catch(error=>{
            console.log(error)
            return {status:0}
        })
        return {status:1,response:result}
    }
}
module.exports = new User()