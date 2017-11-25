'use strict';

// takes raw JSON from openweather.org
// returns array of temperatures for given type: temp, temp_min, or temp_max
const getTimeTemps = (data, type) => {
  let timeTemps = [];
  data.list.forEach((list) => {
    timeTemps.push({time: list.dt, temp: list.main[type]});
  });
  console.log(timeTemps);
  return timeTemps;
};

$('#submit').click(() => {
  $('#chart').empty();
  let zip = $('#zip-input').val();
  getWeather(zip)
    .then(data => {
      console.log(data);
      drawChart(getTimeTemps(data, 'temp'));
    })
    .catch(error => {
      $('#chart').html(`<p>${error}</p>`);
    });
});
