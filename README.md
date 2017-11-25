# An Introduction to D3

This repo contains boilerplate code for an introduction to the D3.js library. D3 is a javascript library that uses HTML, CSS, and SVG to bind data to DOM elements making possible an unlimited variety of data visualizations.

The code in this repo can be used to create line charts showing 5-day weather forecasts for any given US zip code. A deployed example of this app can be found at [http://d3-weather-chart.surge.sh/](http://d3-weather-chart.surge.sh/).

The branch `master` contains boilerplate code that we can add D3 methods to. The `Final` branch contains the final result. The D3 methods to create the line charts can be found at [https://gist.github.com/jsheridanwells/fc18e1bd39624f9c995f8ffcd48b3ad0](https://gist.github.com/jsheridanwells/fc18e1bd39624f9c995f8ffcd48b3ad0).


In addition to D3, this library uses jQuery for AJAX requests and Bootstrap for styling. The data for this project comes from the [OpenWeatherMap.org API.](https://openweathermap.org/api)

## Getting Started
In order to make AJAX requests, you will need a local development server.  [Http-server](https://www.npmjs.com/package/http-server) is a very easy option. 

To install http-server, run:
```
$ npm install http-server -g
```

Follow these instructions to create a directory and to download the starter files:


1. Clone this repository into a directory of your choice.
```
$ git clone https://github.com/jsheridanwells/D3-Demo.git
```
2. Change to the D3-Demo directory
```
$ cd D3-Demo
```
3. Start http-server. This will open your browser to the index at `http://localhost:8080`
```
$ http-server -o
```

Lastly, to get data from OpenWeatherMap, you will need to get a free API key and include that in the application files: 
1. [Sign up for an API key](http://openweathermap.org/appid).

2. Create a file called `api.js` in the `javascripts` directory:
```
$ touch javascripts/api.js
```
3. Open the `api.js` file in a text editor and paste the following code, replacing `[YOUR API KEY]` with the API key that you received from OpenWeatherMap.org:
```
'use strict';

// holds OpenWeatherMap.org api key
let api = '[YOUR API KEY]';
```
Once your API key is saved, if you refresh the browser, open your developer tools console, and enter a zip code in the input field, you should see a console log with data received from OpenWeatherMap.org.
