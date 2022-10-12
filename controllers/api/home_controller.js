
const externalApi =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=egg";


var express = require('express');
var router = express.Router();
var request = require('request');

module.exports.allData= function (req,res){
  request({
    uri: externalApi,
    query: "mealDb",

  },
  function(err, response, body){
    if(!err ){
      return res.status(200).json({msg: "request successful", data:body})
    }
  } 
  )
  return res.status(500);
}

