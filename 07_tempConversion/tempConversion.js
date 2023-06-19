const convertToCelsius = function(temp) {

  function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  let convert =  (temp - 32) * 5/9;
  
  return round(convert, 1);



};

const convertToFahrenheit = function(temp) {

  function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  let convert =  temp *9/5 +32; 
  
  return round(convert, 1);



};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
