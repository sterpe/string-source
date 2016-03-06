'use strict';

module.exports = function StringSource(line) {
  var position = 0;

  return Object.defineProperty(Object.defineProperty({
    peekChar: function peekChar() {
      return position + 1 < line.length ? line.charAt(position + 1) : null;
    },
    nextChar: function nextChar() {
      ++position;
      return this.currentChar;
    }
  }, 'currentChar', {
    get: function get() {
      return position < line.length ? line.charAt(position) : null;
    },
    enumerable: true,
    configurable: false
  }), 'position', {
    get: function get() {
      return position < line.length ? position + 1 : null;
    },
    enumerable: true,
    configurable: false
  });
};