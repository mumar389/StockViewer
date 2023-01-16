const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=require('../models/user');
const bcrypt=require('bcrypt');

//Handling Authentication
passport.use(new LocalStrategy({
    usernameField:'email',},
    function(email ,password,done){
        User.findOne({email:email},function(err,user){
            if(err){
                console.log("error in authentication using Passport");
               return done(err);
            }
            if(!user){
               return done(null,false);
            } 
            bcrypt.compare(password, user.password).then(function(result) {
                return done(null,user);
            })
        });
    }
));
//Serialization
passport.serializeUser(function(user,done){
    done(null,user.id);
});
//deserializaion
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log("error in authentication using Passport");
           return done(err);
        }
        return done(null,user);
    })
});

passport.checkAuthentication=function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/');
}
passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user=req.user;
    }
    next();
}
module.exports=passport;