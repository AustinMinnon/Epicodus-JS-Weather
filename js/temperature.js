exports.convertToCelsius = function(temperature) {
  var outputTemperature = temperature - 273.15
  return outputTemperature.toFixed(1);
}

exports.convertToFahrenheit = function(temperature) {
  return (temperature * 1.8 + 32).toFixed(1);
}
