var express=require('express');  
  
var articlesRouter=express.Router();  
var a_router=function(navMenu){  
    articlesRouter.route("/")  
        .get(function(req,res){  
            res.render('articles', {  
                title:'Healty Assistant - Articles',  
                menu:navMenu  
            });  
        });  
        return articlesRouter;  
}  
      
module.exports=a_router;