# line-source

It returns a source for a line of text.

```javascript
const LineSource = require('line-source')

const l = new LineSource('foo bar quux')

l.currentChar // => 'f'
l.position // => 1
l.peekChar() // => 'o'
l.nextChar() // => 'o'

// All methods/properties return `null' once past 
// the end of the source string, which should not
// contain unescaped `\n' characters.

```
