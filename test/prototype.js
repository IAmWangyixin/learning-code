var expect = require('chai').expect

describe('ES5 原型模式以及原型链继承：', function() {
    var Person = require('../src/object/prototype.js').Person

    it('所有对象实例共享它所包含的属性和方法', function() {
        var person1 = new Person()
        var person2 = new Person()
        person1.friends.push('c')
        expect(person1.sayName).to.be.equal(person2.sayName)
        expect(person2.friends).to.be.equal(person1.friends)
    })

    describe('如果设置构造函数的prototype为对象字面量形式创建的新对象', function(){
        it('那么constructor将不再指向Parent', function() {
            var Parent = require('../src/object/prototype.js').Parent
            var friend1 = new Parent()
            expect(friend1.constructor).to.be.equal(Object)
        })
        
        it('重写原型对象切断了现有原型与任何之前已存在的对象实例之间的关系', function() {
            var friend = require('../src/object/prototype.js').friend
            expect(friend.sayHi()).to.be.equal('hello')
            expect(friend.sayName).to.be.undefined
            expect(friend.constructor).to.be.equal(Person)
        })
    })

    describe('原型链继承', function() {
        var SubType = require('../src/object/prototype.js').SubType
        it('所有实例共享原型属性', function() {
            var instance1 = new SubType()
            instance1.color.push('red')
            var instance2 = new SubType()
            expect(instance1.color).to.be.equal(instance2.color)
        })
    })
})
