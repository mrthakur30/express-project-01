const express = require('express');
const format = require('date-format')
const app = express();

const PORT = 3000 || process.env.PORT ;

app.get("/", (req, res) => {
   res.status(200).send("<h1>Hello world</h1>")
});

app.get("/api/v1/instagram",(req,res)=>{
   const instaSocial = {
     username : "mukulxt",
     followers : 300,
     follows : 350,
     date : format.asString('dd/MM hh:mm:ss',new Date()),
   }

   res.status(200).json(instaSocial);
});

app.get("/api/v1/facebook",(req,res)=>{
    const fbSocial = {
      username : "mukulthakur",
      followers : 30,
      follows : 35,
      date : format.asString('dd/MM hh:mm:ss',new Date()),
    }
    res.status(200).json(fbSocial);
});

app.get("/api/v1/linkedin",(req,res)=>{
    const liSocial = {
      username : "mukulthakur",
      followers : 30,
      follows : 35,
      date : format.asString('dd/MM hh:mm:ss',new Date()),
    }
    res.status(200).json(liSocial);
});

app.get("/api/v1/:id",(req,res)=>{
    res.status(200).json({success: req.params.id})
})

app.listen(PORT,()=>{
     console.log('listening on port ',PORT);
})