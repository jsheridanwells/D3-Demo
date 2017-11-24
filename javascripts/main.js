'use strict';

// takes raw JSON from openweather.org
// returns array of temperatures for given type: temp, temp_min, or temp_max
const getTemps = (data, type) => {
  let temps = [];
  data.list.forEach((list) => {
    temps.push(list.main[type]);
  });
  return temps;
};

$('#submit').click(() => {
  $('#chart').empty();
  let zip = $('#zip-input').val();
  getWeather(zip)
    .then(data => {
      drawChart(getTemps(data, 'temp'));
    })
    .catch(error => {
      $('#chart').html(`<p>${error}</p>`);
    });
});
