const { find } = require('../models/Blog')
var Blog = require('../models/Blog')
var Contact = require('../models/ContactUs')
var Comment = require('../models/Comment')
exports.getdashboard = (req,res)=>{
  res.redirect('/dashboard')
}

exports.getposts = (req,res)=>{


  Blog.find().sort({_id:-1}).then(function(blog){
             res.render('pages/posts',{
                 blogcontent:blog
             })
      })
     

//res.render('pages/posts')
}

exports.getpost = (req,res)=>{
  var id = req.params.id
   Blog.findOne({_id:id}).then(function(blog){
       Comment.find().where({pid:id}).then(function(comment){
              
           console.log(comment)
          res.render('pages/post',{
              blogcontent:blog,
              comm : comment
            })
       })     
    
   })

}

exports.getabout = (req,res)=>{
  res.render('pages/about')
}

exports.getcontact = (req,res)=>{
     res.render('pages/contact')

}

exports.storecontact = (req,res)=>{
  //console.log(req.body)
    
     name = req.body.name
     email = req.body.email
     mobile = req.body.telephone 
      message = req.body.message

      var contact = new Contact()
          contact.name =name
          contact.email = email
          contact.mobile = mobile
          contact.message =message 

       contact.save().then(()=>{
                 res.redirect('/dashboard')
       })   

          
}

exports.getcreatepost = (req,res)=>{
       
     
    res.render('pages/createpost')

}

exports.storepost = (req,res) =>{
     

     title = req.body.title
     desc = req.body.desc
     img  = req.file.filename
     var blog  = new Blog()
     
     blog.title = title
     blog.description = desc
     blog.img = img
     
     blog.save().then(function(){
     res.redirect('/pages/posts')
  })

}

exports.storecomment = (req,res) =>{
    //console.log(req.body)
    pid = req.params.id 
    name = req.body.name
    comment = req.body.comment

    var comm = new Comment()

     comm.name= name
     comm.pid=pid
     comm.comment = comment 

    comm.save().then(function(){
            res.redirect('/pages/posts')
    }) 
   
}