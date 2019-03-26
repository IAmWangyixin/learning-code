/**
 * 组合模式
 * ------------------------------
 * 组合模式使用构造函数模式定义实例属性，
 * 原型模式用于定义方法和共享属性
 * ------------------------------
 */
function Person(name, age, job) {
    this.name = name
    this.age = age
    this.job = job
    this.friends = ['nina', 'bob']
}
Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.log(this.name)
    }
}

/**
 * 组合继承
 * -------------------------------
 * 使用原型链实现对原型属性和方法的继承，
 * 使用借用构造函数实现对实例属性和继承
 * -------------------------------
 */
function SuperType(name) {
    this.name = name
    this.color = ['violet', 'orange']
}
SuperType.prototype.age = '18'
SuperType.prototype.sayName = function() {
    return this.name
}
function SubType(name, job) {
    SuperType.call(this, name)
    this.job = job
}
SubType.prototype = new SuperType()
// 组合继承的问题
console.log(SubType.prototype.color) // [ 'violet', 'orange' ]
SubType.prototype.constructor = SubType
SubType.prototype.sayJob = function() {
    return this.job
}

module.exports = {
    Person,
    SubType
}