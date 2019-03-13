/**
 * 组合继承
 * ------------------------------
 * 组合继承使用构造函数模式定义实例属性，
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
module.exports = Person