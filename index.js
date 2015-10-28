'use strict'

const e = "Illegal '\\n' in line source."

module.exports = function LineSource (line) {
  let position = 0

  if (line.split('\n').length > 1) {
    throw new Error(e)
  }

  return Object.defineProperty(Object.defineProperty({
    peekChar: function () {
      return position + 1 < line.length
        ? line.charAt(position + 1)
        : null
    },
    nextChar: function () {
      ++position
      return this.currentChar
    }
  }, 'currentChar', {
    get: function () {
      return (position < line.length)
        ? line.charAt(position) : null
    },
    enumerable: true,
    configurable: false
  }), 'position', {
    get: function () {
      return (position < line.length)
        ? position + 1 : null
    },
    enumerable: true,
    configurable: false
  })
}
