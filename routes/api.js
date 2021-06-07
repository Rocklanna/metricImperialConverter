/*
*
*
*       Complete the API routing below
*
*
*/
'use strict';
//const url = require('url');

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      let input =  req.query.input;
      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
    
  /*  if(typeof returnNum==="string"){
       console.log(returnNum);
       res.send(returnNum);
    }*/
   
    
    if((initNum==="invalid number") && (initUnit==="invalid unit")){
      console.log("invalid number and unit");
      res.send("invalid number and unit");
    }
    else if(initNum==="invalid number"){
        console.log("invalid number");
      res.send("invalid number");
    }
    else if(initUnit==="invalid unit"){
        console.log("invalid unit");
      res.send("invalid unit");
    }
    else{
        
    console.log({"initNum":initNum,"initUnit":initUnit,"returnNum":returnNum,"returnUnit":returnUnit,"string":toString});
    res.json({"initNum":initNum,"initUnit":initUnit,"returnNum":returnNum,"returnUnit":returnUnit,"string":toString});
    }
    
    });
    
};
