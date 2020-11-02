var mongoose=require('mongoose')

var ContactUsSchema=new mongoose.Schema({
     name:{type:String, required:true},
    email:{type:String,required:true},
       mobile: {type: Number, default: Date.now},
    message: {type:String}

},{
    timestamps:true
})

module.exports = mongoose.model('Contact',ContactUsSchema)