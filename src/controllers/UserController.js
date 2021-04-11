const Person = require('../models/Post');
const User = require('../models/User');
const PasswordToken = require('../models/PasswordToken');
const jwt = require('jsonwebtoken');
const secret = '19216811';
const bcrypt = require("bcrypt");

class UserController{
    
    async create(req,res){

        let {nome,email,senha} = req.body
        let result = await User.create(nome,email,senha).catch(error=>{
            console.log(error)
            return res.status(400).json({error:error})
        })
        return res.json({response:result})

    }

    async list(req,res){
        
        let result = await User.findAll().catch(error=>{
            console.log(error)
            return res.status(400).json({error:error})
        })
        return res.json({response:result})
    }

    //login
    async login(req,res){
        let {email,senha} = req.body
        let user = await User.findByEmail().catch(error=>{
            console.log(email)
        })
        if (user != undefined){

            var result = await bcrypt.compare(senha,user.senha);
            
            if (result){

                var token = jwt.sign({email:user.email},secret)
                return res.json({token:token})

            } else {

                return res.status(406).json({error:"senha incorreta"});
            }
            
        } else {

            return res.status(400).json({error:"Usuario nao encontrado"})
        }

    }
    
}
module.exports = new UserController();