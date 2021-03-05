var express=require('express');
var bodyParser=require('body-parser')
var app=new express();  
var port=3000;  
app.listen(port,function(err){  
    if(typeof(err)=="undefined"){  
        console.log('Your application is running on : '+ port+' port');  
    }  
});  
var navMenu=[
                {href:'/articles',text:'Articles'}  
           ];   
  
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));

app.set('views','./src/views');   
  
app.set('view engine','ejs');
var articlesRouter=require('./src/routes/articlesRoute')(navMenu);
var usersRouter=require('./src/routes/registrationRoute')(navMenu);
var loginRouter=require('./src/routes/loginRoute')(navMenu);
var dataRouter=require('./src/routes/data')(navMenu);
var cookieParser=require('cookie-parser');  
var passport=require('passport');  
var session=require('express-session');

app.use('/register',usersRouter);
app.use('/articles',articlesRouter);  
app.use('/login',loginRouter);
app.use('/usersdata',dataRouter);

app.use(cookieParser());    
require('./src/conf/passport')(app);
  
app.get('/',function(req,res){  
    res.render('index', {  
        title:'Healty Assistant - Personal healthcare',  
        menu:navMenu  
    });  
});