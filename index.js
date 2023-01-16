require('dotenv').config();
const express=require('express');
const passport = require('passport');
//mongodb connection
const db=require('./config/mongoose');
//passport-local
const passportLocal=require('./config/passport_local_strategy')
const path=require('path');
//cookie-parser
const cookieParser=require('cookie-parser');

const MongoStore=require('connect-mongo');

//using express-session
const session=require('express-session');

const app=express();

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')))
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session({
    name:'Mstocx',
    secret:process.env.SECRET,
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store:MongoStore.create({
        mongoUrl:process.env.MONGOURI,
        autoRemove:'disabled',
    },function(err){
        if(err){
            console.log(err || 'Connection Ok');
        }
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser)

app.use('/',require('./routes'));


app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`);
})