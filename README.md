# line-source

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## What is it?

It returns a source for a line of text.

```javascript
const LineSource = require('line-source')

const l = new LineSource('foo bar quux')

l.currentChar // => 'f'
l.position // => 1
l.peekChar() // => 'o'
l.nextChar() // => 'o'

// All methods and properties return `null' once the 
// currentChar has moved past the end of the source
// string.
//
// An error is thrown if the input string contains
// unescaped newline characters (`\n`).
```

## How do I work on it?

### development
```
git clone https://github.com/sterpe/line-source.git
cd line-source
make
```

### build
```
make build
```
### test
```
make JEST_FLAGS=--coverage test
```

### lint
```
make lint
```

Consult the [`Makefile`](Makefile) for further details.
