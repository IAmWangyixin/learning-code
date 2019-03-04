var assert = require('assert')

describe('ES5 构造函数：', function() {
    var Child = require('../src/object/constructor.js')

    it('可以将它的实例标识为一种特定的类型', function() {
        var child0 = new Child()
        assert.deepStrictEqual(Object.getPrototypeOf(child0), Child.prototype)
    })
    it('每个实例都会创建一个拥有自己的属性和方法的对象', function() {
        var child1 = new Child()
        child1.songs.push('What')
    
        var child2 = new Child()
        assert.deepStrictEqual(child2.songs, ['You Belong With me'])
    })
})
