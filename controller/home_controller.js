const mongoose=require('mongoose')
const schema = new mongoose.Schema({
    Date: Date,
    High: Number,
    Low: Number,
    Close: Number,
    Open: Number,
    Adj_Close: Number,
    volume: Number
  });
  
  const AshokLey = mongoose.model("AshokLey", schema);
  const Bse = mongoose.model("Bse", schema);
  const Cipla = mongoose.model("Cipla", schema);
  const Eicher = mongoose.model("Eicher", schema);
  const Nse = mongoose.model("Nse", schema);
  const Reliance = mongoose.model("Reliance", schema);
  const Tata_Steel = mongoose.model("Tata_Steel", schema);

module.exports.home=async(req,res)=>{
    if(req.isAuthenticated()){
        return res.redirect('/users/');
    }
    return res.render('signUp');
}

module.exports.getAshokley=async(req,res)=>{
    AshokLey.find({}, (err, result) => {
       return res.send(result);
      })
}
module.exports.getCipla=async(req,res)=>{
    Cipla.find({}, (err, result) => {
       return res.send(result);
      })
}
module.exports.getEicher=async(req,res)=>{
    Eicher.find({}, (err, result) => {
       return res.send(result);
      })
}
module.exports.getReliance=async(req,res)=>{
    Reliance.find({}, (err, result) => {
       return res.send(result);
      })
}
module.exports.getTatasteel=async(req,res)=>{
    Tata_Steel.find({}, (err, result) => {
       return res.send(result);
      })
}
module.exports.getNse=async(req,res)=>{
    Nse.find({}, (err, result) => {
        return res.send(result);
       })
}

module.exports.getbse=async(req,res)=>{
    Bse.find({}, (err, result) => {
        return res.send(result);
       })
}



module.exports.ashokley=async(req,res)=>{
    if(!(req.isAuthenticated())){
        return res.redirect('/');
    }
   return res.render('stock', {
        company: "ashokleyland",
      });
}
module.exports.cipla=async(req,res)=>{
    if(!(req.isAuthenticated())){
        return res.redirect('/');
    }
   return res.render('stock', {
        company: "cipla"
      });
}
module.exports.eicher=async(req,res)=>{
    if(!(req.isAuthenticated())){
        return res.redirect('/');
    }
   return res.render('stock', {
        company: "eicher"
      });
}
module.exports.relicance=async(req,res)=>{
    if(!(req.isAuthenticated())){
        return res.redirect('/');
    }
    return res.render('stock', {
        company: "reliance"
      });
}
module.exports.tatasteel=async(req,res)=>{
    if(!(req.isAuthenticated())){
        return res.redirect('/');
    }
    return res.render('stock', {
        company: "tatasteel"
      });
}

module.exports.nse=async(req,res)=>{
    if(!(req.isAuthenticated())){
        return res.redirect('/');
    }
    return res.render('stock', {
        company: "nse"
      });
}
module.exports.bse=async(req,res)=>{
    if(!(req.isAuthenticated())){
        return res.redirect('/');
    }
    return res.render('stock', {
        company: "bse"
      });
}
