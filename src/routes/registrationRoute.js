var express=require('express');  
var mongodb=require('mongodb').MongoClient;  
var usersRouter=express.Router();  
var u_router=function(navMenu){  
    usersRouter.route("/")  
        .get(function(req,res){  
                res.render('registration', {  
                    title:'Registration',  
                    menu:navMenu,  
                    message:''  
                });  
        })  
        .post(function(req,res){  
            var url='mongodb://localhost:27017/userdata';  
            mongodb.connect(url,function(err,db){  
                var collection=db.collection('Users');  
                collection.insertOne(req.body,function(err,result){  
                    res.render('registration', {  
                        title:'Registration-done',  
                        menu:navMenu,
                        message:'Successfully Registered'  
                    });  
                });  
            });  
        });  
        return usersRouter;  
}     
module.exports=u_router;