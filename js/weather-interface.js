var apiKey = require('./../.env').apiKey;
var convertToCelsius = require('./../js/temperature.js').convertToCelsius;
var convertToFahrenheit = require('./../js/temperature.js').convertToFahrenheit;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').append(
        "<p>The humidity in " + city + " is " + response.main.humidity
      + "%</p><p>The temperature is <span id='celcius'>" + convertToCelsius(response.main.temp) + "&#8451;</span></p><br>"
      + "<button class='fahrenheit'>click for fahrenheit</button>");
      $('.fahrenheit').click(function(){
        var celcius = parseInt($('#celcius').text());
        var fahrenheit = convertToFahrenheit(celcius);
        $('#celcius').text("");
        $('#celcius').append(fahrenheit.toString().concat("&#8457;"));
      });
    }).fail(function(error) {
      $('.showWeather').text(error.message);
    });
  });
});
