const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGOURI);

const db=mongoose.connection;

db.on('error',console.error.bind('console','errro in connection with db'));

db.on('open',function(){
    console.log("Successfully Connected To the database");
})

module.exports=db;