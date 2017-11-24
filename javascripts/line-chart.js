'use strict';

//set size of svg relative to window
let margin = {top: 50, right: 50, bottom: 50, left: 50},
  width = window.innerWidth - margin.left - margin.right,
  height = window.innerHeight - margin.top - margin.bottom;

//create an SVG with the dimensions set my margin, width, and height variables
let svg = d3.select('#chart').append('svg')
  .attr('width', width)
  .attr('height', height);

svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
