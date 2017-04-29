var express = require("express"),
    router = express(),
    mongoose = require('mongoose'),
    Memory = require('../model/memorySchema'),
    Desc = require('../model/descSchema');
var memorydefiner=require("../service/memory-service");
    
//Routes
router.get('/', function(req, res){
    res.render('memory');
    
    Memory.find({}, function(err, memory){
        if(err){
            throw err;
        }
        
        for (var x=0; x<memory.length-1; x++){
            var generatedMemory= memorydefiner(memory[x]);
            memory[x].image = generatedMemory.image;
            memory[x].sound = generatedMemory.sound;
        }
        
        res.json(memory);
    });
});

router.post('/', function(req, res){
    var d = req.body;
    
    var o = new Memory({
        name:   d.name,
        summary:   d.summary,
        weather: d.weather,
        location: d.location,
        img:    d.img,
        date:   d.date
        //user_id: d._id
    }); 
    
     console.log(o);
    
    o.save(function(err){
         if(err) throw err;
         console.log('save sucessful');
         
         res.redirect("/");
     });
    
    
});



/*
router.post('/Menu', function(req, res){

    
});
*/

module.exports = router;