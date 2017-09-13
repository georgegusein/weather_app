const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://virtnet:1234@ds153413.mlab.com:53413/virtnet',['cities']);

//get all tasks
router.get('/cities',(req,res,next)=>{
    db.cities.find({}).limit(10).skip(1).toArray(function (err, docs) { 
        if(err){
            res.send(err);
        }else{
            res.json(docs);
        }
     });
});

//get by string
//get task by id
router.get('/cities/:str',(req,res,next)=>{
    let str = req.params.str;
    console.log(str);
    let query = {
        "name": {
            "$regex": str,
            "$options": "i"
        }
    };
    db.cities.find(query).limit(10).skip(1).toArray(function (err, docs) { 
        if(err){
            res.send(err);
        }else{
            res.json(docs);
        }
     });
     /*
    db.cities.find({_id: mongojs.ObjectId(id)},(err,cities)=>{
        if(err){
            res.send(err);
        }else{
            res.json(cities);
        }
    });*/
});

module.exports = router;