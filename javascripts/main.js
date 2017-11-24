'use strict';

let zip = $('#zip-input').val();

// checks data array from openweather.org
// returns array of temperatures for given type: temp, temp_min, or temp_max
const getTemps = (data, type) => {
  let temps = [];
  data.list.forEach((list) => {
    temps.push(list.main[type]);
  });
  return temps;
};

$('#submit').click(() => {
  getWeather(zip).then(data => {
    console.log(data, getTemps(data, 'temp_min'), getTemps(data, 'temp_max'))})
});
