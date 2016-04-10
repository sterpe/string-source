# string-source

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## What is it?

It returns a source for a string of text.

```javascript
const StringSource = require('string-source')

const l = new StringSource('foo bar quux')

l.currentChar // => 'f'
l.position // => 1
l.peekChar() // => 'o'
l.nextChar() // => 'o'

// All methods and properties return `null' once the 
// currentChar has moved past the end of the source
// string.
```

## How do I work on it?

### development
```
git clone https://github.com/sterpe/string-source.git
cd string-source
make
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
