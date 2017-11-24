'use strict';

//TEMP. bring in an array to test
getWeather('53213').then(data => drawLineChart(getTemps(data, 'temp_max')));

const drawLineChart = (arr) => {
  //set array to y values
  let dataset = arr.map((d) => {
    return { 'y': d }
  });

  //set size of svg relative to window
  let margin = {top: 50, right: 50, bottom: 50, left: 50},
    width = window.innerWidth - margin.left - margin.right,
    height = window.innerHeight - margin.top - margin.bottom;

  //create an SVG with the dimensions set my margin, width, and height variables
  let svg = d3.select('#chart').append('svg')
    .attr('width', width)
    .attr('height', height);

  svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  let xScale = d3.scaleLinear()
    .domain([0, arr.length])
    .range([0, width]);

  let yScale = d3.scaleLinear()
    .domain([0, d3.max(arr)])
    .range([0, height]);

  let line = d3.line()
    .x((d, i) => xScale(i))
    .y((d, i) => yScale(d.y));

  svg.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(xScale));

  svg.append('g')
    .attr('class', 'y axis')
    .call(d3.axisLeft(yScale));

  svg.append('path')
    .datum(dataset)
    .attr('class', 'line')
    .attr('d', line);

};
