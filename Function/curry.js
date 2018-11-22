module.exports = function curry(fn, ...curryArgs) {
  return function(...args) {
    // keeping the 'this' of this function, which will be useful for prototype methods
    return fn.call(this, ...curryArgs, ...args)
  }
}
