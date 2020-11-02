var Blog = require('../models/Blog')
exports.getdashboard = (req,res)=>{
     //res.send('home')
      Blog.find().sort({_id:-1}).limit(3).then(function(blog){
             res.render('pages/index',{
                 blogcontent:blog
             })
      })
     
}