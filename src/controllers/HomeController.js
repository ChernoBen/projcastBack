const Person = require('../models/Post');
const User = require('../models/User');

class HomeController{

    async create(req, res){
        
        res.send("APP EXPRESS! - Guia do programador");
    }
    
    //criar post
    async createPerson(req,res){

        let {autor,titulo,conteudo} = req.body
        let idAutor = 1
        await Person.criar(idAutor,titulo,conteudo).then(response=>{
            console.log(response)
            return res.json({response:response})
        }).catch(error=>{
            console.log(error)
            return res.status(400).json({error:error})
        })

    }

    //listar pessoa
    async listPerson(req,res){
        let {id} = req.body
        await Person.listar(id).then(response=>{
            console.log(response)
            return res.json({response:response.response})
        }).catch(error=>{
            console.log(error)
            return res.status(400).json({error:error})
        })
    }

}

module.exports = new HomeController();