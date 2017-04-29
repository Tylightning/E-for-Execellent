var express = require("express"),
    router = express(),
    mongoose = require('mongoose'),
    User = require('../model/userSchema');
    
    
    
//Routes
router.get('/SignUp', function(req, res){
    res.render('signUp');
});

router.post('/SignUp', function(req, res){
    var d = req.body;
    
    console.log(d);
    
    var o = new User({
      name: d.name,
      email: d.email,
      password: d.password
    });
    
    console.log(o);
    
    o.save(function(err){
         if(err) throw err;
         res.redirect('/');
     });
    
});

router.get('/login', function(req, res){
    res.render('login');
});

router.post('/login', function(req, res){
    var d = req.body;
    
    User.findOne({email: d.email, password: d.password}, function(err, user){
      if(err){
          
          throw err;
      } 
      console.log('Successfully Login');
      
      res.send({status: 1, data: users});
      
      console.log(users);
    });
    
});



/*
router.post('/Menu', function(req, res){

    
});
*/

module.exports = router;