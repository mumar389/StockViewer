const User=require('../models/user');
const bcrypt=require('bcrypt');
const salt=10;
const jwt=require('jsonwebtoken');
const path=require('path');

module.exports.userHome=async(req,res)=>{
    if(req.isAuthenticated()){

        return res.render('index')
    }
    return res.redirect('/');
}


//new User registration-:
module.exports.create=async(req,res)=>{
    try {
        const {name,email,password,cp}=req.body;
        if(!name||!email||!password||!cp){
            console.log("Fields cannot be empty");
            return res.status(422).json({
                message:"Fields cannot be empty"
            })
        }
        if(password!==cp){
            console.log("Both passwords should match");
            return res.status(422).json({
                message:"Both passwords should match"
            })
        }
        let allUsers=await User.findOne({email:email});
        if(!allUsers){
            bcrypt.genSalt(salt, function(err, salt) {
                bcrypt.hash(password, salt,async function(err, hash) {
                    // Store hash in your password DB.
                    let newUser=await User.create({
                        name,email,password:hash
                    });
                });
            });
            // var options = {
            //     root: path.join('../public/')
            //   };
            
            //   var fileName = '../public/signUp.html';
            //   return res.sendFile(fileName);


            return res.redirect('/');
            // return res.status(200).json({
            //     message:"User Registered Sucessfully"
            // })
        }else{
            console.log("User with this email already exists");
            return res.status(422).json({
                message:"User with this email already exists,, please login to continue"
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            message:"Internal Server Error"
        })
    }
}

//login user,creating the token
module.exports.createSession=async(req,res)=>{
    try {
        
        return res.redirect('/users/')

        
    } catch (error) {
        console.log("Error",error);
        return res.status(501).json({
            message:"Internal Server Error"
        })
    }


}



module.exports.logout=async(req,res)=>{
    if(!(req.isAuthenticated())){
        return res.redirect('back')
    }
    req.logout((err)=>{
        res.clearCookie('Mstocx')
        return res.redirect('/')
    })
}