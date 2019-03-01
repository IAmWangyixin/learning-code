assert = require('assert')

describe('ES5 构造函数：', function() {
    var Child = require('../src/class/constructor.js')

    it('每个实例都会创建一个拥有自己的属性和方法的对象', function() {
        var child1 = new Child()
        child1.name.push('grandpa')
    
        var child2 = new Child()
        assert.deepEqual(child2.name, ['mom', 'dad'])
    })
})
