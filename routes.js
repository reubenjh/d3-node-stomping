const express = require('express')
const d3NMaker = require('./d3-initialise')

const router = express.Router()

router.get('/', (req, res) => {
  const d3n = d3NMaker.newD3N()
  // console.log(d3n.document.body);
  const d3 = d3n.d3
        // doc = d3.document

  let data = [{value: 10}, {value: 20}, {value: 3}, {value: 5}, {value: 7}]

  let svg = d3.select(d3n.document.body)
    .select('#bones')
    .append("svg")
    .attr("height", 1000)
    .attr("width", 1000)

  let rest = svg.selectAll('circle')
              .data(data)
              .attr('cx', () => {
                console.log('already a circle here');
              })
              .enter().append('circle')
              .attr("cx", () => 200 + Math.random()*100)
              .attr("cy", (d,i) => 100*(i+1))
              .attr("r", d => 2*d.value*(1+Math.random()*0.3))
              .attr("fill", () => "red")

              svg.selectAll('rect')
                          .data(data)
                          .attr('cx', () => {
                            console.log('already a circle here');
                          })
                          .enter().append('rect')
                          .attr("x", () => 400 + Math.random()*100)
                          .attr("y", (d,i) => 100*(i+1))
                          .attr("width", d => 2*d.value*(1+Math.random()*0.3))
                          .attr("height", d => 2*d.value*(1+Math.random()*0.3))
                          .attr("fill", () => "red")



  console.log(d3n.html());
  res.send(d3n.html())
})

module.exports = router
