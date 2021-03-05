var express=require('express');  
var mongodb=require('mongodb').MongoClient;  
var dataRouter=express.Router();  
var d_router=function(navMenu){  
    dataRouter.route("/")  
        .get(function(req,res){  
            var url='mongodb://localhost:27017/userdata';  
            mongodb.connect(url,function(err,db){  
                var collection=db.collection('Users');  
                collection.find({}).toArray(function(err,results){  
                    res.render('data', {  
                        title:'Users data',  
                        menu:navMenu,  
                        data:results  
                    });  
                });  
            });  
        });  
        return dataRouter;  
}  
      
module.exports=d_router; 