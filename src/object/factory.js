/**
 * 工厂模式
 * -------------------------------------------
 * 解决使用同一个接口创建多个对象，会产生大量重复代码
 * 缺点：无法解决对象识别问题
 */
function createPerson(name, age, job) {
    var o = Object.create(null)
    o.name = name
    o.age = age
    o.job = job

    o.sayName = function () {
        console.log(this.name)
    }
    return o
}

module.exports = createPerson