/**
 * Modules
 */

var hyphenate = require('@f/hyphenate')
var defaultUnits = require('@f/css-default-units')

/**
 * Expose toInlineStyle
 */

module.exports = toInlineStyle

/**
 * toInlineStyle
 */

function toInlineStyle (style) {
  var str = ''

  for (var key in style) {
    var val = defaultUnits(key, style[key])

    if (val !== null && val !== undefined) {
      str += format(key, val)
    }
  }

  return hyphenate(str)
}

/**
 * Format a css key, value pair to their respective string representation
 */

function format (key, value) {
  return key + ':' + value + ';'
}
