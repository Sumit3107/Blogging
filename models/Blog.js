var mongoose=require('mongoose')

var BlogSchema=new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String,required:true},
    createdAt: {type: Date, default: Date.now},
    img : {type:String}

},{
    timestamps:true
})

module.exports = mongoose.model('Blog',BlogSchema)