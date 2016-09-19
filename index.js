'use strict'

var axel = require('axel')

var parts = [
  {
    name: 'GROUND',
    render: function () {
      this.axel.line(
        this.startX,
        this.startY + this.length,
        this.startX + this.width,
        this.startY + this.length
      )
    }
  },
  {
    name: 'VERTICAL_POLE',
    render: function () {
      this.axel.line(
        this.startX,
        this.startY + this.length,
        this.startX,
        this.startY
      )
    }
  },
  {
    name: 'HORIZONTAL_POLE',
    render: function () {
      this.axel.line(
        this.startX,
        this.startY,
        this.startX + this.horizontalPoleLength,
        this.startY
      )
    }
  },
  {
    name: 'ROPE',
    render: function () {
      this.axel.line(
        this.startX + this.horizontalPoleLength,
        this.startY,
        this.startX + this.horizontalPoleLength,
        this.startY + this.ropeLength + this.missFactor
      )
    }
  },
  {
    name: 'FACE',
    render: function () {
      this.axel.circ(
        this.startX + this.horizontalPoleLength,
        this.startY + this.ropeLength + this.faceRadius,
        this.faceRadius
      )
    }
  },
  {
    name: 'BODY',
    render: function () {
      this.axel.line(
        this.startX + this.horizontalPoleLength,
        this.startY + this.ropeLength + (2 * this.faceRadius) - this.missFactor,
        this.startX + this.horizontalPoleLength,
        this.startY + this.ropeLength + (2 * this.faceRadius) + this.bodyLength
      )
    }
  },
  {
    name: 'RIGHT_ARM',
    render: function () {
      this.axel.line(
        this.startX + this.horizontalPoleLength,
        this.startY + this.ropeLength + (2 * this.faceRadius) + this.armOffset,
        this.startX + this.horizontalPoleLength - this.armLength,
        this.startY + this.ropeLength + (2 * this.faceRadius) + this.armOffset + this.armLength
      )
    }
  },
  {
    name: 'LEFT_ARM',
    render: function () {
      this.axel.line(
        this.startX + this.horizontalPoleLength + 1,
        this.startY + this.ropeLength + (2 * this.faceRadius) + this.armOffset,
        this.startX + this.horizontalPoleLength + this.armLength + 1,
        this.startY + this.ropeLength + (2 * this.faceRadius) + this.armOffset + this.armLength
      )
    }
  },
  {
    name: 'RIGHT_LEG',
    render: function () {
      this.axel.line(
        this.startX + this.horizontalPoleLength,
        this.startY + this.ropeLength + (2 * this.faceRadius) + this.bodyLength,
        this.startX + this.horizontalPoleLength - this.legLenth,
        this.startY + this.ropeLength + (2 * this.faceRadius) + this.bodyLength + this.legLenth
      )
    }
  },
  {
    name: 'LEFT_LEG',
    render: function () {
      this.axel.line(
        this.startX + this.horizontalPoleLength + 1,
        this.startY + this.ropeLength + (2 * this.faceRadius) + this.bodyLength,
        this.startX + this.horizontalPoleLength + this.legLenth + 1,
        this.startY + this.ropeLength + (2 * this.faceRadius) + this.bodyLength + this.legLenth
      )
    }
  }
]

function HangmanArt (options) {
  options = !options ? {} : options

  this.startX = options.startX || 0
  this.startY = options.startY || 0
  this.scale = options.scale || 1

  this.length = (options.length || 40) * this.scale
  this.width = (options.width || 40) * this.scale
  this.horizontalPoleLength = (options.horizontalPoleLength || this.width - 20) * this.scale
  this.ropeLength = (options.ropeLength || 5) * this.scale
  this.faceRadius = (options.faceRadius || 5) * this.scale
  this.bodyLength = (options.bodyLength || 10) * this.scale
  this.armOffset = (options.armOffset || 5) * this.scale
  this.armLength = (options.armLength || 5) * this.scale
  this.legLenth = (options.legLenth || 5) * this.scale
  this.missFactor = (options.missFactor || 2) * this.scale

  this.marginX = options.marginX || 0
  this.marginY = options.marginY || 0
  this.startX += this.marginX
  this.startY += this.marginY

  this.state = -1

  this.brush = options.brush || '*'
  this.axel = axel
  this.initialClear = options.initialClear || true
  if (this.initialClear) {
    this.axel.clear()
  }
  this.axel.brush = this.brush
  this.restoreCursor = options.restoreCursor || true
}

HangmanArt.prototype.next = function () {
  if (parts[++this.state]) {
    parts[this.state].render.call(this)
    if (this.restoreCursor) {
      this.axel.cursor.restore()
    }
  }
}

module.exports = HangmanArt
