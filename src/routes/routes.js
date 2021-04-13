const express = require("express")
const app = express();
const router = express.Router();
const multer = require('multer');
const HomeController = require("../controllers/HomeController");
const UserController = require("../controllers/UserController");

const upload = multer({dest:"uploads/"})

router.post('/person',HomeController.createPerson,upload.single("file"));
router.get('/person',HomeController.listPerson);
router.post('/user',UserController.create);
router.post('/login', UserController.login);
router.get('/user',UserController.list)

module.exports = router;