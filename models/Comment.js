var mongoose=require('mongoose')

var CommentSchema=new mongoose.Schema({
     name:{type:String, required:true},
    comment:{type:String,required:true},
       pid: {type: String}
},{
    timestamps:true
})

module.exports = mongoose.model('Comment',CommentSchema)