
/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    

    let result;
    var regexSplit = /(?=[a-zA-Z])/;
   var regexNum= /(^\d+[.]{0,1}$)|(^\d*[.]{0,1}\d+$)/;
   // var regexNum = /(^\d+[.]{0,1}[\/]{0,1}[.]{0,1}\d+[.]{0,1}$)|(^\d*[.]{0,1}[\/]{0,1}[.]{0,1}\d+[.]{0,1}$)/;
    

    
      result = input.split(regexSplit)[0];
    
    
    result = result.toLowerCase();
    
    var countFrac = (result.match(/\//g) || []).length;
    var indexFrac = result.indexOf("/");
    
   
    
      if(regexSplit.test(result)){
          result=1;
        return result;
      }
    
    
    if(((indexFrac>=0) && (countFrac===1)) || regexNum.test(result)){
       
        var array = result.split("/");
       
       if(regexNum.test(result)){
      result =eval(result);
        return result;
       }
      else if((regexNum.test(array[0])) && (regexNum.test(array[1]))){
              result =eval(result);
              return result;
      }
       else{
          return "invalid number"
       }
         
    }
    else{
       return "invalid number"
    }

  };
  
  this.getUnit = function(input) {
    let result;
 
    
    var regexSplit = /(?<=[^a-zA-Z])/;
    var array = input.split(regexSplit);
    result = array[array.length-1].toLowerCase();
    
    const checkUnit = ["l","kg","lbs","mi","km","gal"]
    
    if(checkUnit.indexOf(result)===-1){
      return "invalid unit";
    }
    
    if(result ==="l"){
       return result.toUpperCase();
    }
   
       return result;
    
   
  };
  
  this.getReturnUnit = function(initUnit) {
     let result;
    
    const convertUnit = {
      L:"gal",
      gal:"L",
      lbs:"kg",
      kg:"lbs",
      mi:"km",
      km:"mi"
    }
    
   if(convertUnit.hasOwnProperty(initUnit)){
    
      result = convertUnit[initUnit];
   
       return result;
   }
    else{
      return "invalid unit";
    }
  };

  this.spellOutUnit = function(unit) {
    
      const unitFull = {
      L:"litres",
      gal:"gallons",
      lbs:"pounds",
      kg:"kilograms",
      mi:"miles",
      km:"kilometers"
    }
    let result;
    
       result = unitFull[unit];
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    
    if((initNum==="invalid number") && (initUnit ==="invalid unit")){
       return "invalid number and unit"
       }
      else if (initUnit ==="invalid unit"){
       return "invalid unit"
      }
      else if(initNum==="invalid number"){
       return "invalid number"
      }
    
    initNum = Number(initNum);

    
    result = (initUnit==="gal") ?  initNum * galToL
             : (initUnit==="L") ? initNum / galToL
              : (initUnit==="lbs") ? initNum * lbsToKg
              : (initUnit==="kg") ? initNum / lbsToKg
              : (initUnit==="mi") ? initNum * miToKm
               : initNum / miToKm
          
   
    return Number(result.toFixed(5));
    
 
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
   
    if(typeof returnNum==="string"){
        return returnNum
    }
        
    result = initNum + " "+ this.spellOutUnit(initUnit) +" converts to " + returnNum + " " +  this.spellOutUnit(returnUnit);
    
    return result;
  };
  
}

module.exports = ConvertHandler;
