const express=require('express');
const router=express.Router();
const passport=require('passport');
const userController=require('../controller/users_controller');

router.get('/',userController.userHome);
//route for registering the user
router.post('/create',userController.create);

//route for logging in the user
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/'}
),userController.createSession);

//logout route
router.get('/sign-out',userController.logout);



module.exports=router;