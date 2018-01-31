<p align="center">
  <kbd>u t i l s</kbd>
</p>

These are general-use & common utilities used in several Conjure-related projects.

### Install

```sh
npm install utils@ConjureLabs/utils
```

### Usage

Any file seen in here can be referred to directly.

```js
const sortInsensitive = require('utils/Array/sort-insensitive');
sortInsensitive(myArr);
```

Some will have logic that is triggered just by requiring the file.

```js
require('utils/process/handle-exceptions');
```
