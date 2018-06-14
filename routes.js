const express = require('express')
const d3NMaker = require('./d3-initialise')

const router = express.Router()

router.get('/', (req, res) => {
  const d3n = d3NMaker.newD3N()

  
  res.send('yo, its working')
})

module.exports = router
