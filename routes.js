const express = require('express')
const d3NMaker = require('./d3-initialise')

const router = express.Router()

router.get('/', (req, res) => {
  const d3n = d3NMaker.newD3N()
  const d3 = d3n.d3
        // doc = d3.document

  let data = [10, 20, 3, 5, 7]

  let svg = d3.select(d3n.document.body)
    .select('#bones')
    .append("svg")
    .attr("height", 1000)
    .attr("width", 1000)

  svg.selectAll('circle')
    .data(data)
    .enter().append('circle')
      .attr("cx", () => 200 + Math.random()*100)
      .attr("cy", (d,i) => 100*(i+1))
      .attr("r", d => 2*d)
      .attr("fill", () => "red")


  res.send(d3n.html())
})

module.exports = router
