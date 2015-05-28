'use strict'

const request = require('supertest')
const redirects = require('..')
const koa = require('koa')

describe('koa-redirects', function() {
  describe('prefix', function() {
    it('prefix: /api/v2/; redirects: /bar', function(done) {
      let app = koa()
      redirects(app, '/api/v2/')

      app.use(function*() {
        this.redirects('/bar')
      })

      request(app.listen())
        .get('/')
        .expect('Location', '/bar')
        .expect(302, done)
    })

    it('prefix: /api/v2/; redirects: /bar', function(done) {
      let app = koa()
      redirects(app, {
        prefix: '/api/v2/'
      })

      app.use(function*() {
        this.redirects('/bar')
      })

      request(app.listen())
        .get('/')
        .expect('Location', '/bar')
        .expect(302, done)
    })

    it('prefix: /api/v2/; redirects: back', function(done) {
      let app = koa()
      redirects(app, {
        prefix: '/api/v2/'
      })

      app.use(function*() {
        this.redirects('back')
      })

      request(app.listen())
        .get('/')
        .set('Referrer', 'https://github.com/api/v1/bar')
        .expect('Location', 'https://github.com/api/v1/bar')
        .expect(302, done)
    })

    it('prefix: /api/v2/; redirects: bar', function(done) {
      let app = koa()
      redirects(app, {
        prefix: '/api/v2/'
      })

      app.use(function*() {
        this.redirects('bar')
      })

      request(app.listen())
        .get('/')
        .expect('Location', '/api/v2/bar')
        .expect(302, done)
    })

    it('prefix: https://github.com; redirects: bar', function(done) {
      let app = koa()
      redirects(app, {
        prefix: 'https://github.com'
      })

      app.use(function*() {
        this.redirects('bar')
      })

      request(app.listen())
        .get('/')
        .expect('Location', 'https://github.com/bar')
        .expect(302, done)
    })

    it('prefix: https://github.com; redirects: /bar', function(done) {
      let app = koa()
      redirects(app, {
        prefix: 'https://github.com'
      })

      app.use(function*() {
        this.redirects('/bar')
      })

      request(app.listen())
        .get('/')
        .expect('Location', 'https://github.com/bar')
        .expect(302, done)
    })

    it('prefix: https://github.com; redirects: https://google.com/bar', function(done) {
      let app = koa()
      redirects(app, {
        prefix: 'https://github.com'
      })

      app.use(function*() {
        this.redirects('https://google.com/bar')
      })

      request(app.listen())
        .get('/')
        .expect('Location', 'https://google.com/bar')
        .expect(302, done)
    })
  })
})
