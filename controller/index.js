var express = require("express"),
    router = express(),
    mongoose = require('mongoose'),
    Memory = require('../model/memorySchema');
    
    
//Routes
router.get('/', function(req, res){
    res.render('index');
});

router.get('/Contact', function(req, res){
    res.render('contact');
});

router.get('/Survey', function(req, res){
    res.render('survey');
});

router.post('/Survey', function(req, res){
    
    var d = req.body;
    
    console.log(d);
    
    var o = new Memory ({
        name:   d.name,
        desc:   d.desc,
        weather: d.weather,
        location: d.location,
        img:    d.img,
        date:   d.date
    }); 
    
     console.log(o);
    
    o.save(function(err){
         if(err) throw err;
         console.log('save sucessful');
         
         res.redirect('/memory');
     });

});


router.get("/api", function(req, res){
    
    Memory.find({}).exec(function(err, data){
        if(err){
            console.log(err);
        }
        res.send(data);
    });
});

module.exports = router;