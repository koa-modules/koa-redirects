[![NPM version][npm-img]][npm-url]
[![Build status][travis-img]][travis-url]
[![Test coverage][coveralls-img]][coveralls-url]
[![License][license-img]][license-url]
[![Dependency status][david-img]][david-url]

### koa-redirects

* redirect with `prefix`
* `map` support

### Example

```js
const redirects = require('koa-redirects')
const koa = require('koa')
const app = koa()

redirects(app, {
  prefix: '/api/v2',
  map: {
    'auth': 'http://some.com/api/oauth'
  }
})

// or
// redirects(app, '/api/v2')

app.use(function*() {
  this.redirects('/bar')
})

app.use(function*() {
  this.redirects('auth')
})
```

### License
MIT

[npm-img]: https://img.shields.io/npm/v/koa-redirects.svg?style=flat-square
[npm-url]: https://npmjs.org/package/koa-redirects
[travis-img]: https://img.shields.io/travis/koa-modules/koa-redirects.svg?style=flat-square
[travis-url]: https://travis-ci.org/koa-modules/koa-redirects
[coveralls-img]: https://img.shields.io/coveralls/koa-modules/koa-redirects.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/koa-modules/koa-redirects?branch=master
[license-img]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: http://opensource.org/licenses/MIT
[david-img]: https://img.shields.io/david/koa-modules/koa-redirects.svg?style=flat-square
[david-url]: https://david-dm.org/koa-modules/koa-redirects
