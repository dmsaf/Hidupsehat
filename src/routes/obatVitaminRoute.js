var express=require('express');  
  
var obatVitaminRouter=express.Router();  
var p_router=function(navMenu){  
    obatVitaminRouter.route("/")  
        .get(function(req,res){  
            res.render('obatVitamin', {  
                title:'Healty Assistant - Obat & Vitamin',  
                menu:navMenu  
            });  
        });  
        return obatVitaminRouter;  
}  
module.exports=p_router;