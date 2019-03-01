/**
 * 构造函数(经典继承)
 * ----------------------------------
 * 优点：
 * 1. 实例可以通过Child向Person传参数
 * 2. 避免了引用类型的属性被实例共享
 * ----------------------------------
 * 缺点：
 * 1. 可被复用的方法都在构造函数中定义，每个实例都会创建一遍。
 */
function Person() {
    this.name = ['mom', 'dad']
}

function Child() {
    Person.call(this)
}

// let child1 = new Child()
// child1.name.push('grandpa')

// let child2 = new Child()
// child2.name
// // ['mom', 'dad']
module.exports = Child
