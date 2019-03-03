assert = require('assert')

describe('ES5 工厂模式：', function() {
    var createPerson = require('../src/object/factory.js')

    it('无论调用多少次，只返回包含三个属性的对象', function() {
        var person1 = createPerson('test1', '18', 'sudents')
        assert.deepEqual(person1.name, 'test1')
    })

    it('创建的对象原型指向null，无法识别对象', function(){
        var person2 = createPerson('nina', '2*', 'web developer')
        assert.deepEqual(Object.getPrototypeOf(person2), null)
    })
})
