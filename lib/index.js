/**
 * Modules
 */

var hyphenate = require('@f/hyphenate')

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
    str += format(key, style[key])
  }

  return hyphenate(str)
}

/**
 * Format a css key, value pair to their respective string representation
 */

function format (key, value) {
  return key + ':' + value + ';'
}
