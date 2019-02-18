var margin = {
    top: 20,
    right: 30,
    bottom: 30,
    left: 40
  },
  width = 1024 - margin.left - margin.right,
  height = 768 - margin.top - margin.bottom;

// scale to ordinal because x axis is not numerical
var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);

//scale to numerical value by height
var y = d3.scale.linear().range([height, 0]);
function plot(childData){

var chart = d3.select("#chart")
.append("svg") //append svg element inside #chart
.attr("width", width + (2 * margin.left) + margin.right) //set width
.attr("height", height + margin.top + margin.bottom); //set height
var xAxis = d3.svg.axis()
.scale(x)
.orient("bottom"); //orient bottom because x-axis will appear below the bars

var yAxis = d3.svg.axis()
.scale(y)
.orient("left");
var data=childData;

var bar = chart.selectAll("g")
  .data(data)
  .enter()
  .append("g")
  .attr("transform", function(d, i) {
    console.log(d)
    return "translate(" + x(d.receive_date) + ", 0)";
  });

bar.append("rect")
  .attr("y", function(d) {
    return y(d.responses);
  })
  .attr("x", function(d, i) {
    return x.rangeBand() + (margin.left / 2);
  })
  .attr("height", function(d) {
    return height - y(d.responses);
  })
  .attr("width", x.rangeBand()); //set width base on range on ordinal data

bar.append("text")
  .attr("x", x.rangeBand() + margin.left)
  .attr("y", function(d) {
    return y(d.responses) - 10;
  })
  .attr("dy", ".75em")
  .text(function(d) {
    return d.responses;
  });

chart.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(" + margin.left + "," + height + ")")
  .call(xAxis);

chart.append("g")
  .attr("class", "y axis")
  .attr("transform", "translate(" + margin.left + ",0)")
  .call(yAxis)
  .append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 6)
  .attr("dy", ".71em")
  .style("text-anchor", "end")
  .text("responses");
}


function type(d) {
  d.receive_date = +d.receive_date; // coerce to number
  return d;
}