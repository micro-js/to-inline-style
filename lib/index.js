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
  return Object.keys(style)
    .map(function (prop) {
      return format(hyphenate(prop), style[prop])
    })
    .join(';')
}

/**
 * Hyphenate a given `str`
 */

function hyphenate (str) {
  return str
    .replace(upperCasePattern, '-$1')
    .toLowerCase()
}

/**
 * Format a css key, value pair to their respective string representation
 */

function format (key, value) {
  return key + ':' + value
}
