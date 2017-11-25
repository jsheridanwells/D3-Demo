// borrowed heavily from this chart:
// https://bl.ocks.org/pstuffa/26363646c478b2028d36e7274cedefa6

const drawChart = (arr) => {

  // 1. set dimensions of SVG relative to chart width and window height - navbar
  let margin = {top: 50, right: 50, bottom: 50, left: 50},
    width = $('#chart').width() - margin.left - margin.right,
    height = window.innerHeight - margin.top - margin.bottom - $('#nav').height();

  // 2. create SVG appended to #chart, dimensions come from values set above
  let svg = d3.select('#chart').append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // 3. function to set scale for x-axis, mapped to range of times in dataset
  let xScale = d3.scaleTime()
      .domain(d3.extent(arr, d => d.time))
      .range([0, width]);

  // 4. function to set scale for y-axis, mapped from 0 to highest temperature + 10
  let yScale = d3.scaleLinear()
      .domain([0, d3.max(arr, d => d.temp_max) + 10])
      .range([height, 0]);

  // 5. append x-axis
  svg.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(xScale)
      .ticks(d3.timeHour.every(6)));

  // 6. append y-axis, add 'TEMP' label
  svg.append('g')
      .call(d3.axisLeft(yScale))
      .append('text')
      .attr('fill', '#000')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Temperature (F)');

  // 7. function to create line coordinates for each datum
      //x is time, y is temperature
  let line = d3.line()
      .x(d => xScale(d.time))
      .y(d => yScale(d.temp_max));

  // 8. append path, moves in direction set by values in line
  let path = svg.append('path')
      .datum(arr)
      .attr('class', 'line')
      .attr('d', line);

  // 9. append dots for each temperature
  svg.selectAll('.dot')
      .data(arr)
      .enter().append('circle')
      .attr('class', 'dot')
      .attr('cx', (d) => xScale(d.time))
      .attr('cy', (d) => yScale(d.temp_max))
      .attr('r', 2);
}
