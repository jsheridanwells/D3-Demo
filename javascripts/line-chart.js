// borrowed heavily from this chart:
// https://bl.ocks.org/pstuffa/26363646c478b2028d36e7274cedefa6

const drawChart = (arr) => {
  let timesArr = arr.map(item => item.time);
  let tempsArr = arr.map(item => item.temp);

  console.log(timesArr);

  let margin = {top: 50, right: 50, bottom: 50, left: 50},
    width = $('#chart').width() - margin.left - margin.right,
    height = window.innerHeight - margin.top - margin.bottom - $('#nav').height();

  let xScale = d3.scaleTime()
      .domain(d3.extent(timesArr, (d) => d))
      .range([0, width]);

  let yScale = d3.scaleLinear()
      .domain([0, d3.max(tempsArr) + 10])
      .range([height, 0]);


  let line = d3.line()
      .x((d) => xScale(d.time))
      .y((d) => yScale(d.temp));

  let dataset = arr;

  let svg = d3.select('#chart').append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(xScale).ticks(d3.timeHour.every(6)));

  svg.append('g')
      // .attr('class', 'y axis')
      .call(d3.axisLeft(yScale))
      .append('text')
      .attr('fill', '#000')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Temperature (F)');

  svg.append('path')
      .datum(dataset)
      .attr('class', 'line')
      .attr('d', line);

  svg.selectAll('.dot')
      .data(dataset)
      .enter().append('circle')
      .attr('class', 'dot')
      .attr('cx', function(d, i) { return xScale(d.time) })
      .attr('cy', function(d) { return yScale(d.temp) })
      .attr('r', 2);
}
