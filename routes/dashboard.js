var express = require('express')
var router = express.Router()
var dashboardController = require('../controllers/dashboardController')

router.get('/',(req,res)=>{
     res.redirect('/dashboard')
})

router.get('/dashboard',dashboardController.getdashboard)

module.exports = router