<p align="center">
  <kbd>u t i l s</kbd>
</p>

These are general-use & common utilities used in several Conjure-related projects.

### Install

```sh
npm install --save @conjurelabs/utils
```

or

```sh
yarn add @conjurelabs/utils
```

### Usage

Any file seen in here can be referred to directly.

```js
const sortInsensitive = require('@conjurelabs/utils/Array/sort-insensitive')
sortInsensitive(myArr)
```

Some will have logic that is triggered just by requiring the file.

```js
require('@conjurelabs/utils/process/handle-exceptions')
```

### Notes

> What makes something a util?

It's small enough that I don't want to make a dedicated module for it.

> Should I use this?

I use these in production, so you can. But these are one-offs that may change, and are used internally on Conjure-related projects. If you like something, you should copy or fork it.

### Tests

```sh
npm test
npm run lint
```
