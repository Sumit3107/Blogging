var express = require('express')
var router = express.Router()
var PageController = require('../controllers/PageController')
var multer = require('multer')

var storage = multer.diskStorage({ 
    destination: (req, file, cb) => { 
        cb(null, 'assets/upload') 
    }, 
    filename: (req, file, cb) => { 
        cb(null, file.fieldname + '-' + Date.now()) 
    } 
}); 
var upload = multer({storage:storage})


router.get('/',PageController.getdashboard)

router.get('/posts',PageController.getposts)

router.get('/post/:id',PageController.getpost)


router.get('/about',PageController.getabout)

router.get('/contact',PageController.getcontact)

router.post('/storecontact',PageController.storecontact)

router.get('/createpost',PageController.getcreatepost)

router.post('/storepost',upload.single('img'),PageController.storepost)

router.post('/post/:id',PageController.storecomment)





module.exports = router