const express= require('express');

const app= express();
const port=8000;
const rateLimit = require("express-rate-limit");

const db=require('./cofing/mongoose');
var bodyParser = require('body-parser');


app.use(bodyParser.json());
const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 15 minutes
  max: 2, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false,
  message: "You exceeded 20 requests  1 minute!", // Disable the `X-RateLimit-*` headers
});


// Apply the rate limiting middleware to API calls only
app.use("/", apiLimiter);
//use the body
app.use(express.urlencoded({extended:true}));

app.use('/', require('./routes/index'));



app.listen(port,function(err){
    if(err){ console.log("error in starting server"); return;}
    console.log("server is running on Port :", port);
})

