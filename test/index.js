/**
 * Imports
 */

var toInlineStyle = require('../lib')
var test = require('tape')

/**
 * Tests
 */

test('should convert objects to inline style strings', function (t) {
  t.deepEqual(
    toInlineStyle({color: '#fff', margin: 0}),
    'color:#fff;margin:0px;'
  )
  t.end()
})

test('should hyphenate camelcased properties', function (t) {
  t.deepEqual(
    toInlineStyle({backgroundColor: '#000'}),
    'background-color:#000;'
  )
  t.end()
})

test('should leave hyphenated properties as is', function (t) {
  t.deepEqual(
    toInlineStyle({'background-color': '#000'}),
    'background-color:#000;'
  )
  t.end()
})

test('should hyphenate prefixes correctly', function (t) {
  t.deepEqual(
    toInlineStyle({
      WebkitUserSelect: 'none',
      MsFlexAlign: 'stretch'
    }),
    '-webkit-user-select:none;-ms-flex-align:stretch;'
  )
  t.end()
})
