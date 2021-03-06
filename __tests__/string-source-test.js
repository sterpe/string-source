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
  'StringSource#currentChar'
].join(' '), function () {
  it([
    'should return the first',
    'character in the source line',
    'when the lineSource is just',
    'instantiated'
  ].join(' '), function () {
    const StringSource = require(FILE)
    const source = 'foo'

    const l = new StringSource(source)

    expect(l.currentChar).toBe(source[0])
  })
  it([
    'should afterwards, always',
    'return the same value as',
    'the previous call to',
    '#nextChar()'
  ].join(' '), function () {
    const StringSource = require(FILE)
    const source = 'foo'

    const l = new StringSource(source)

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
    const StringSource = require(FILE)
    const source = ''

    const l = new StringSource(source)

    expect(l.currentChar).toBe(null)

    let i = 0
    for (; i < 100; i++) {
      l.nextChar()
      expect(l.currentChar).toBe(null)
    }
  })
})
describe([
  'StringSource#nextChar()'
].join(' '), function () {
  it([
    'should return each next',
    'character and then null',
    'afterwards'
  ].join(' '), function () {
    const StringSource = require(FILE)
    const source = 'foo'

    const l = new StringSource(source)

    expect(l.nextChar()).toBe('o')
    expect(l.nextChar()).toBe('o')
    expect(l.nextChar()).toBe(null)

    let i = 0
    for (; i < 100; i++) {
      expect(l.nextChar()).toBe(null)
    }
  })
})
describe([
  'StringSource#peekChar()'
].join(' '), function () {
  it([
    'should return the character',
    'that will be returned by the',
    'next call to #nextChar'
  ].join(' '), function () {
    const StringSource = require(FILE)
    const source = 'bar'

    const l = new StringSource(source)

    let i = 0

    for (; i < 100; i++) {
      expect(l.peekChar()).toBe(l.nextChar())
    }
  })
})
describe([
  'StringSource#position'
].join(' '), function () {
  it([
    'should return the current',
    'position on the line and',
    'null once past the end of',
    'the line (position is 1-indexed)'
  ].join(' '), function () {
    const StringSource = require(FILE)
    const source = 'quux'

    const l = new StringSource(source)

    let i = 0

    for (; i < source.length; ++i) {
      expect(l.currentChar).toBe(source.charAt(i))
      expect(l.position).toBe(i + 1)
      l.nextChar()
    }
    for (; i < 100; ++i) {
      expect(l.position).toBe(null)
      l.nextChar()
    }
  })
})
