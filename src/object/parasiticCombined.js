/**
 * 寄生组合式继承
 * 通过借用构造函数继承属性
 * 通过原型链的混成形式继承方法
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
// 注意
function F() {}
F.prototype = SuperType.prototype;
SubType.prototype = new F()
SubType.prototype.constructor = SubType
SubType.prototype.sayJob = function() {
    return this.job
}