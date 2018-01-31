const { test } = require('ava');

const sortInsensitive = require('../../Array/sort-insensitive');

test('should modify the array', t => {
  const example = ['f', 'B', 'a', 'G', 'C', 'E', 'd', 'h'];
  const exampleStart = example.join('');
  sortInsensitive(example);

  if (example.join('') !== exampleStart) {
    return t.pass();
  }
  t.fail();
});

test('should sort array of strings case insensitive', t => {
  const example = ['f', 'B', 'a', 'G', 'C', 'E', 'd', 'h'];
  sortInsensitive(example);

  if (example.join('') === 'aBCdEfGh') {
    return t.pass();
  }
  t.fail();
});

test('should sort objects, if given a key', t => {
  const frank = {
    fname: 'frank',
    born: 'USA'
  };
  const bob = {
    fname: 'Bob',
    born: 'Thailand'
  };
  const susan = {
    fname: 'susan',
    born: 'Australia'
  };

  const example = [bob, frank, susan];
  sortInsensitive(example, 'fname');

  if (example[0] === bob && example[1] === frank && example[2] === susan) {
    return t.pass();
  }
  t.fail();
});
