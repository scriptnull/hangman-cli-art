# hangman-cli-art
Hangman art for command line :+1: :-1:

![hangman](/pictures/anim.gif)

# Install

```bash
npm install --save hangman-cli-art
```

# API

```javascript
var HangmanArt = require('hangman-cli-art')

var art = new HangmanArt({
  marginX: 5,
  marginY: 5
})


art.next() // call next() to render next part
````
Refer [source](https://github.com/scriptnull/hangman-cli-art/blob/master/index.js#L117) for other available options

# Example
Renders hangman part by part.
```javascript
var HangmanArt = require('hangman-cli-art')

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
[![Run Status](https://api.shippable.com/projects/57dfdf7b0973e60f00aa870e/badge?branch=master)](https://app.shippable.com/projects/57dfdf7b0973e60f00aa870e)

![](https://david-dm.org/scriptnull/hangman-cli-art.svg)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
