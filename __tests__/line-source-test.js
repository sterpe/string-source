/* global
  describe
  expect
  jest
  it
*/

'use strict'

const FILE = '..'

jest.dontMock(FILE)

describe([
  'LineSource'
].join(' '), function () {
  it([
    'should throw an error',
    "when there is a '\\n' in",
    'the source string'
  ].join(' '), function () {
    const LineSource = require(FILE)
    const errorSource = 'foo\nbar'

    expect(function () {
      const l = new LineSource(errorSource)
      return l
    }).toThrow(new Error("Illegal '\\n' in line source."))
  })
})

describe([
  'LineSource#currentChar'
].join(' '), function () {
  it([
    'should return the first',
    'character in the source line',
    'when the lineSource is just',
    'instantiated'
  ].join(' '), function () {
    const LineSource = require(FILE)
    const source = 'foo'

    const l = new LineSource(source)

    expect(l.currentChar).toBe(source[0])
  })
  it([
    'should afterwards, always',
    'return the same value as',
    'the previous call to',
    '#nextChar()'
  ].join(' '), function () {
    const LineSource = require(FILE)
    const source = 'foo'

    const l = new LineSource(source)

    let c = l.nextChar()

    while (c !== null) {
      expect(l.currentChar).toBe(c)
      c = l.nextChar()
    }
    expect(l.currentChar).toBe(c)
    expect(l.currentChar).toBe(null)
  })
  it([
    'should return null once',
    'past the string length',
    'no matter how many times',
    '#nextChar() is called'
  ].join(' '), function () {
    const LineSource = require(FILE)
    const source = ''

    const l = new LineSource(source)

    expect(l.currentChar).toBe(null)

    let i
    for (; i < 100; i++) {
      l.nextChar()
      expect(l.currentChar).toBe(null)
    }
  })
})
