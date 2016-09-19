# hangman-cli-art
Hangman art for command line :+1: :-1:

![hangman](/pictures/anim.gif)

# Install

```bash
npm install --save hangman-cli-art
```

# API

```javascript
var HangmanArt = require('./index.js')

var art = new HangmanArt({
  marginX: 5,
  marginY: 5
})


art.next() // call next() to render next part
````

# Example
Renders hangman part by part.
```javascript
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
```

# Badges
[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
