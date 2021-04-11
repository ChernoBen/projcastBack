class HomeController{

    async create(req, res){
        
        res.send("APP EXPRESS! - Guia do programador");
    }

}

module.exports = new HomeController();