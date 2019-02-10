// takes in an array of strings,
// and returns a modified version
// where all values have been padded
// to equal the longest's,
// plus extra amount as specified
module.exports = function equalWidths(strings, extraPadding = 0) {
  const longestLen = strings.reduce((longestLen, str) => {
    if (str.length > longestLen) {
      return str.length
    }
    return longestLen
  }, 0)

  return strings.map(str => str + ' '.repeat(longestLen - str.length + extraPadding))
}
