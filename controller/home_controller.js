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
    AshokLey.find({}, (err, result) => {
        var last = result.length;
        var current = result[last - 1];
        console.log(current);
       return res.render('stock', {
        company: "ashokleyland",
        current_Date: current.Date,
        current_High: current.High,
        current_Low: current.Low,
        current_Close: current.Close,
        current_Open: current.Open,
        current_Adj_Close: current.Adj_Close,
        });
       })

}
module.exports.cipla=async(req,res)=>{
    if(!(req.isAuthenticated())){
        return res.redirect('/');
    }
    Cipla.find({}, (err, result) => {
        var last = result.length;
        var current = result[last - 1];
        console.log(current);
       return res.render('stock', {
        company: "cipla",
        current_Date: current.Date,
        current_High: current.High,
        current_Low: current.Low,
        current_Close: current.Close,
        current_Open: current.Open,
        current_Adj_Close: current.Adj_Close,
        });
       })
}
module.exports.eicher=async(req,res)=>{
    if(!(req.isAuthenticated())){
        return res.redirect('/');
    }
    Eicher.find({}, (err, result) => {
        var last = result.length;
        var current = result[last - 1];
        console.log(current);
       return res.render('stock', {
        company: "eicher",
        current_Date: current.Date,
        current_High: current.High,
        current_Low: current.Low,
        current_Close: current.Close,
        current_Open: current.Open,
        current_Adj_Close: current.Adj_Close,
        });
       })
}
module.exports.relicance=async(req,res)=>{
    if(!(req.isAuthenticated())){
        return res.redirect('/');
    }
    Reliance.find({}, (err, result) => {
        var last = result.length;
        var current = result[last - 1];
        console.log(current);
       return res.render('stock', {
        company: "reliance",
        current_Date: current.Date,
        current_High: current.High,
        current_Low: current.Low,
        current_Close: current.Close,
        current_Open: current.Open,
        current_Adj_Close: current.Adj_Close,
        });
       })
}
module.exports.tatasteel=async(req,res)=>{
    if(!(req.isAuthenticated())){
        return res.redirect('/');
    }
    Tata_Steel.find({}, (err, result) => {
        var last = result.length;
        var current = result[last - 1];
        console.log(current);
       return res.render('stock', {
        company: "tatasteel",
        current_Date: current.Date,
        current_High: current.High,
        current_Low: current.Low,
        current_Close: current.Close,
        current_Open: current.Open,
        current_Adj_Close: current.Adj_Close,
        });
       })
}

module.exports.nse=async(req,res)=>{
    if(!(req.isAuthenticated())){
        return res.redirect('/');
    }
    Nse.find({}, (err, result) => {
        var last = result.length;
        var current = result[last - 1];
        console.log(current);
       return res.render('stock', {
        company: "nse",
        current_Date: current.Date,
        current_High: current.High,
        current_Low: current.Low,
        current_Close: current.Close,
        current_Open: current.Open,
        current_Adj_Close: current.Adj_Close,
        });
       })
}
module.exports.bse=async(req,res)=>{
    if(!(req.isAuthenticated())){
        return res.redirect('/');
    }
    Bse.find({}, (err, result) => {
        var last = result.length;
        var current = result[last - 1];
        console.log(current);
       return res.render('stock', {
        company: "bse",
        current_Date: current.Date,
        current_High: current.High,
        current_Low: current.Low,
        current_Close: current.Close,
        current_Open: current.Open,
        current_Adj_Close: current.Adj_Close,
        });
       })
}

