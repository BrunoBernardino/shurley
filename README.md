# Shurley

[![](https://github.com/BrunoBernardino/shurley/workflows/Run%20Tests/badge.svg)](https://github.com/BrunoBernardino/shurley/actions?workflow=Run+Tests)

> I'll give you the right URL, but [don't call me Shirley!](https://www.youtube.com/watch?v=ixljWVyPby0)

Parses URLs from user input (with potential typos in protocols, bad copy+paste, etc.) and returns a proper URL.

It has no dependencies, and it's meant to be this simple.

### Some things to note:

1. It doesn't check if the URL exists, you can do that in many different ways.

2. It assumes only `http` and `https` protocols for URLs.

3. If there's a "mistake" in the URL protocol, it defaults to `https`.

## Usage

It only has a _single method_: `parse(url: string)` which returns the same string, parsed.

```bash
npm install --save shurley
```

```js
const shurley = require('shurley');

const parsedUrl = shurley.parse('/example.com');

console.log(parsedUrl); // Outputs 'https://example.com'
```

## Development

```bash
npm install  # installs dependencies
npm test  # runs mocha
npm run lint  # runs eslint
npm run pretty  # runs prettier
```

## Publishing

Update the version, run tests, then just run `npm publish`.
