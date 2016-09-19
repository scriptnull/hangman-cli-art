var HangmanArt = require('./index.js')

var art = new HangmanArt({
  marginX: 5,
  marginY: 5
})

var chance = 0
var timer = setInterval(function () {
  if (chance < 10) {
    art.next()
    chance++
  } else {
    clearInterval(timer)
  }
}, 1000)
