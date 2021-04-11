const express = require("express")
const app = express();
const router = express.Router();
const HomeController = require("../controllers/HomeController");
const UserController = require("../controllers/UserController")

router.post('/person',HomeController.createPerson);
router.get('/person',HomeController.listPerson);
router.post('/user',UserController.create);
router.post('/login', UserController.login);
router.get('/user',UserController.list)

module.exports = router;