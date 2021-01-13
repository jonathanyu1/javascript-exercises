const ftoc = function(temp) {
  finalTemp = ((temp-32)*5/9);
  if (Number.isInteger(finalTemp)){
    return finalTemp;
  }  
  return Number(finalTemp.toFixed(1));
}

const ctof = function(temp) {
  finalTemp = (temp*9/5)+32;
  if (Number.isInteger(finalTemp)){
    return finalTemp;
  }  
  return Number(finalTemp.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}

// jasmine tempConversion.spec.js