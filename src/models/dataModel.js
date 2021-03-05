var mongoose=require('mongoose');
var db = require('../database');
// create an schema
var userSchema = new mongoose.Schema({
            name: String,
            email:String,
            password:String,
            gender:String
        });
userTable=mongoose.model('users',userSchema);
        
module.exports={     
     fetchData:function(callback){
        var userData=userTable.find({});
        userData.exec(function(err, data){
            if(err) throw err;
            return callback(data);
        })
        
     }
}