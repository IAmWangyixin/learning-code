var assert = require('assert')

describe('ES5 组合继承：', function() {
    var createPerson = require('../src/object/mixin.js')
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
})
