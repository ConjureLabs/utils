const { test } = require('ava')

const equalWidths = require('../../String/equal-widths')

test('should return all strings in equal widths', t => {
  const input = ['a', 'b', 'cc', 'ddd', 'eeee', 'f', 'g', 'h     ', '         i']
  const output = equalWidths(input)

  const outputRef = output[0]
  for (let i = 1; i < output.length; i++) {
    t.is(output[i].length, outputRef.length)
  }
})

test('should add extra specified padding as requested', t => {
  const input = ['tim', 'marshall']
  const output = equalWidths(input, 6)
  t.is(output[0], 'tim           ')
  t.is(output[1], 'marshall      ')
})
