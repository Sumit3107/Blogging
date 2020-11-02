var mongoose = require('mongoose')

exports.connection = function() {
  mongoose.connect(
    'mongodb://localhost:27018/blog',
    { useNewUrlParser: true,useUnifiedTopology: true },
    function(err) {
      if(!err) {
        console.log('DB Connected!')
      } else {
        console.log(err)
      }
    }
  )
}