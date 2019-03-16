/**
 * 原型模式
 * -------------------------------------
 * 特点：所有对象实例共享它所包含的属性和方法，
 *  这即是原型模式的优点也是它的缺点
 * --------------------------------------
 * 需要注意的地方：
 * 如果设置Person.prototype = {},
 * 那么constructor将不再指向Parent。
 */
function Person() {
}

var friend = new Person();
Person.prototype.sayHi = function () {
    return 'hello'
}

// 创建Person实例后重写Person.prototype
Person.prototype = {
    constructor: Person,
    name: 'prototype',
    friends: ['a', 'b'],
    sayName: function () {
        return this.name
    }
}

function Parent() {}
// 重写Parent.prototype
Parent.prototype = {}


/**
 * 原型继承
 * ----------------------------------------------
 * 注意： 不能使用对象字面量创建原型，这样会重写原型链
 * 缺点： 
 * 1.包含引用类型的原型，原型属性会被所有实例共享
 * 2.实例不能像超类传参，意味着不能在不影响所有对
 * 象实例的情况下，给超类型的构造函数传参
 * ----------------------------------------------
 */
function SuperType() {
    this.property = '111'
    this.color = ['violet', 'orange']
}

function SubType() {
}

SubType.prototype = new SuperType()

module.exports = {
    Person,
    Parent,
    friend,
    SubType
}
