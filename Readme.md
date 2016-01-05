
# to-inline-style

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Convert style object to plain strings for inline html styles.

## Installation

    $ npm install @f/to-inline-style

## Usage

```js
var toInlineStyle = require('@f/to-inline-style')

var inlineStyles = toInlineStyle({
  '-webkit-user-select': 'none',
  MsUserSelect: 'none',
  userSelect: 'none',
  color: 'blue'
})
// -> '-webkit-user-select:none;-ms-user-select:none;user-select:none;color:blue'
```

## API

### toInlineStyle(styleObject)

- `styleObject` - an object with style key, value pairs

**Returns:** A string representation of `styleObject` which can be used in `style` attributes

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/to-inline-style.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/to-inline-style
[git-image]: https://img.shields.io/github/tag/micro-js/to-inline-style.svg
[git-url]: https://github.com/micro-js/to-inline-style
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/to-inline-style.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/to-inline-style
