
const { json } = require('express');
var express = require('express');
var router = express.Router();
var request = require('request');
var Data=require('../../model/data');



module.exports.allData= function (req,res){

  var name=req.body.name;


  
  const externalApi =
  `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    
  request({
    uri: externalApi,
    query: "mealDb",

  },
  function(err,body){
    if(!err){
      // save(body.idMeal,body.strMeal)
        var result=JSON.stringify(body);  
        Data.create({
        data:result,
        name:name
  });
  

      return res.status(200).json({msg: "request successful", data:result})
      
    }
  })
}




