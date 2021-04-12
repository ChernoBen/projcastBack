const knex = require('../database/connection');
const bcrypt = require("bcrypt")
const PasswordToken = require("./PasswordToken")

class User {

    async create(nome,email,senha) {

        var hash = await bcrypt.hash(senha, 10).catch(error => {

            console.log(error)
        });

        let result = await knex.insert({ email:email, senha:hash, nome:nome}).table("users").catch(err => {

            console.log(err)
        })
        return {status:1,response:result}

    }
    
    async findByEmail(email){

        let result = await knex.select(["id", "email","senha", "nome"]).from("users").where({ email: email }).catch(err => {

            return undefined
        })

        if (result.length > 0){
            console.log(result)
            return result[0]
            
        }else{

            return undefined
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