'use strict'

module.exports = function StringSource (line) {
  let position = 0

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
