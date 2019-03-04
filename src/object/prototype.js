/**
 * 原型模式
 * -------------------------------------
 * 特点：所有对象实例共享它所包含的属性和方法，
 *  这即是原型式的优点也是它的缺点
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

Person.prototype = {
    constructor: Person,
    name: 'prototype',
    friends: ['a', 'b'],
    sayName: function () {
        return this.name
    }
}

function Parent() {}

Parent.prototype = {}

module.exports = {
    Person,
    Parent,
    friend
}
