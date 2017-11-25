# An Introduction to D3

This repo contains boilerplate code for an introduction to the D3.js library. D3 is a javascript library that uses HTML, CSS, and SVG to bind data to DOM elements making possible an unlimited variety of data visualizations.

The code in this repo can be used to create line charts showing 5-day weather forecasts for any given US zip code.

The branch `master` contains boilerplate code that we can add D3 methods to. The `Final` branch contains the final result. In addition to D3, this library uses jQuery for AJAX requests and Bootstrap for styling. The data for this project comes from the [OpenWeatherMap.org API.](https://openweathermap.org/api)

## Installation and Setup
In order to make AJAX requests, you will need a local development server.  [Http-server](https://www.npmjs.com/package/http-server) is a very easy option. 
1. To install run:
```
$ npm install http-server -g
```

1. Create a directory and navigate inside:
```
$ mkdir d3-weather && cd $_
```
2. Clone this repository
```
$ git clone https://github.com/jsheridanwells/D3-Demo.git
```
3. Start http-server. This will open your browser to the index at `http://localhost:8080`
```
$ http-server -o
```

