'use strict'

const resolve = require('url').resolve

module.exports = function(app, opts) {
  let prefix

  if (typeof opts === 'string') {
    prefix = opts
    opts = null
  }

  opts = opts || {}

  let map = opts.map || {}

  prefix = prefix ? prefix : opts.prefix || ''

  /**
   * @param {String} url
   * @param {String} alt
   */
  app.context.redirects = function(url, alt) {
    if (map.hasOwnProperty(url)) {
      return this.redirect(map[url])
    }

    if (url === 'back') {
      return this.redirect(url, alt)
    }

    url = resolve(prefix, url)

    this.redirect(url, alt)
  }
}
