/**
 * Modules
 */

/**
 * Expose toInlineStyle
 */

module.exports = toInlineStyle['default'] = toInlineStyle

/**
 * Vars
 */

var upperCasePattern = /([A-Z])/g

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
 * Hyphenate a given `str`
 */

function hyphenate (str) {
  return str.replace(upperCasePattern, dashLower)
}

function dashLower (c) {
  return '-' + c.toLowerCase()
}

/**
 * Format a css key, value pair to their respective string representation
 */

function format (key, value) {
  return key + ':' + value + ';'
}
