const assert = require('assert')

describe('实现一个基类，可以继承，可以监听事件', function () {
  describe('ES6', function () {
    const Base = require('../src/object/ES6/classExtend.js')
    class View extends Base {
      constructor(options) {
        super(options)
      }
    }

    it('能够监听事件', function (done) {
      const view = new View
      view.on('test', function () {
        done()
      })
      view.trigger('test')
    })

    it('能够监听事件并传值', function (done) {
      const view = new View
      view.on('test', function (value) {
        assert.equal(value, 'hello world')
        done()
      })
      view.trigger('test', 'hello world')
    })

    it('监听函数的this指向自己', function (done) {
      const view = new View
      view.on('test', function () {
        assert.equal(this, view)
        done()
      })
      view.trigger('test')
    })
  })
})