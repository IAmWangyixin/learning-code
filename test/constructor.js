var assert = require('assert')

describe('ES5 构造函数：', function() {
    var Child = require('../src/object/constructor.js').Child

    it('可以将它的实例标识为一种特定的类型', function() {
        var child0 = new Child()
        assert.deepStrictEqual(Object.getPrototypeOf(child0), Child.prototype)
    })
    it('每个实例都会创建一个拥有自己的属性和方法的对象', function() {
        var child1 = new Child()
        child1.songs.push('What')
    
        var child2 = new Child()
        assert.deepStrictEqual(child2.songs, ['You Belong With me'])
        assert.notDeepStrictEqual(child2.sayName, child1.sayName)
    })

    describe('经典继承：', function() {
        var SubType = require('../src/object/constructor.js').SubType
        it('每个实例都会具有自己的属性', function() {
            var instance1 = new SubType()
            instance1.color.push('white')

            var instance2 = new SubType()
            assert.notDeepStrictEqual(instance2.color, instance1.color)
        })
        it('实例可以向超类传参', function() {
            var instance3 = new SubType('passenger')
            assert.deepStrictEqual(instance3.name, 'passenger')
        })
        it('实例无法继承超类原型对象上的属性和方法', function() {
            var instance4 = new SubType()
            assert.equal(instance4.age, undefined)
            assert.equal(instance4.sayName, undefined)
        })
    })
})
