const Person = require('../models/Post');
const User = require('../models/User');

class HomeController{

    async create(req, res){
        
        res.send("APP EXPRESS! - Guia do programador");
    }
    
    //criar post
    async createPerson(req,res){

        let {autor,titulo,conteudo} = req.body
        await Person.criar(autor,titulo,conteudo).then(response=>{
            console.log(response)
            return res.json({response:response})
        }).catch(error=>{
            console.log(error)
            return res.status(400).json({error:error})
        })

    }

}

module.exports = new HomeController();