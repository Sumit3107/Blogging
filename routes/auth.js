var express = require('express')
const app = require('../app')
var router = express.Router()

var AuthController = require('../controllers/AuthController')


router.get('/login',AuthController.loginform)

router.post('/login',AuthController.login)


module.exports = router