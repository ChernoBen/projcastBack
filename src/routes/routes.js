var express = require("express")
var app = express();
var router = express.Router();
var HomeController = require("../controllers/HomeController");

router.post('/person',HomeController.createPerson);
router.get('/person',HomeController.listPerson);

module.exports = router;