var express=require('express')
var bodyParser=require('body-parser')
var path = require('path')
var dashboard = require('./routes/dashboard')
var page = require('./routes/pages')
var db = require('./helpers/database')
var session = require('express-session')
var auth = require('./routes/auth')


db.connection()

var app = express()


app.use(session({
    secret:'abcd1234',
    cookie:{},
    resave:false,
    saveUninitialized:true
}))


app.set('view engine','ejs')


app.use(express.static(path.join(__dirname, 'assets')))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/',dashboard)
app.use('/',auth)
app.use('/pages',page)


module.exports = app