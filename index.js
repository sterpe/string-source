'use strict'

module.exports = function LineSource (line) {
  let position = 0

  if (line.split('\n').length > 1) {
    throw new Error()
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
    configurable: false
  }), 'position', {
    get: function () {
      return (position < line.length)
        ? position + 1 : null
    },
    configurable: false
  })
}
