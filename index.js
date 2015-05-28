'use strict'

const URL = require('url')

module.exports = function(app, opts) {
  let prefix

  if (typeof opts === 'string') {
    prefix = opts
    opts = null
  }

  opts = opts || {}

  prefix = prefix ? prefix : opts.prefix || ''

  /**
   * @param {String} url
   * @param {String} alt
   */
  app.context.redirects = function(url, alt) {
    if (url === 'back') {
      return this.redirect(url, alt)
    }

    url = URL.resolve(prefix, url)

    this.redirect(url, alt)
  }
}
