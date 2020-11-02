exports.loginform = (req,res)=>{
    res.render('pages/login')
}

exports.login = (req,res) =>{
      console.log(req.body)
    res.redirect('/dashboard')
}



