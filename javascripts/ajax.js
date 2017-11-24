'use strict';

const getWeather = (zip) => {
  return new Promise((resolve, reject) => {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&APPID=${api}&units=imperial`
      })
    .done(data => resolve(data));
  });
};
