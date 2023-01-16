const express=require('express');
const passport = require('passport');
const router=express.Router();
const homeControl=require('../controller/home_controller');



router.get('/',homeControl.home)
router.get('/chart1',homeControl.ashokley);
router.get('/chart2',homeControl.cipla);
router.get('/chart3',homeControl.eicher);
router.get('/chart4',homeControl.relicance);
router.get('/chart5',homeControl.tatasteel);
router.get('/chart6',homeControl.nse);
router.get('/chart7',homeControl.bse);
router.get('/ashokleyland',homeControl.getAshokley);
router.get('/cipla',homeControl.getCipla);
router.get('/eicher',homeControl.getEicher);
router.get('/reliance',homeControl.getReliance);
router.get('/tatasteel',homeControl.getTatasteel);
router.get('/nse',homeControl.getNse);
router.get('/bse',homeControl.getbse);
router.use('/users',require('./user'));






module.exports=router;