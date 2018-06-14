const D3Node = require('d3-node')

const creationOptions = {
  selector: '#bones',
  container: '<div id="container"><div id="bones"></div></div>'
}
// const d3N = new D3Node(creationOptions)

module.exports = {
  newD3N: () => new D3Node(),
  newRawD3N: () => new D3Node(creationOptions)
}
