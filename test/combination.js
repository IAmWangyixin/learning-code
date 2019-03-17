var assert = require('assert')

describe('ES5 组合模式以及组合继承：', function() {
    var createPerson = require('../src/object/combination.js').Person
    var person1 = new createPerson('test1', '18', 'student')
    var person2 = new createPerson('nina', '2*', 'web developer')

    it('构造方法让实例拥有自己的属性', function() {
        person1.name = 'test2'
        person1.friends.push('NeiNei')
        assert.deepStrictEqual(person1.name, 'test2')
        assert.deepStrictEqual(person2.name, 'nina')
        assert.notStrictEqual(person1.friends, person2.friends)
    })

    it('原型方法让实例间拥有共同的方法', function(){
        assert.deepStrictEqual(person1.sayName, person2.sayName)        
    })

    describe('组合继承', function() {
        var SubType = require('../src/object/combination.js').SubType
        var instance1 = new SubType('test1', 'student')
        var instance2 = new SubType('nina', 'web developer')
        it('实例拥有自己的属性', function() {
            instance1.name = 'test2'
            instance1.color.push('blue')
            assert.deepStrictEqual(instance1.name, 'test2')
            assert.deepStrictEqual(instance2.name, 'nina')
            assert.notStrictEqual(instance1.color, instance2.color)
        })
        it('实例可以继承超类原型中的属性和方法,且实例间拥有共同的方法', function(){
            assert.deepStrictEqual(instance1.age, '18')
            assert.deepStrictEqual(instance1.sayName, instance2.sayName)        
        })
    })
})
