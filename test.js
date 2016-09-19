var HangmanArt = require('./index.js')

var art = new HangmanArt({
  marginX: 5,
  marginY: 5
})

setInterval(art.next.bind(art), 1000)
