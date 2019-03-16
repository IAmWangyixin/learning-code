/**
 * 构造函数(经典继承)
 * ----------------------------------
 * 优点：
 * 1. 可以将它的实例标识为一种特定的类型
 * 2. 实例可以通过 Child 向Person传参数
 * 3. 避免了引用类型的属性被实例共享
 * ----------------------------------
 * 缺点：
 * 1. 可被复用的方法都在构造函数中定义，每个实例都会创建一遍。
 */
function Person() {
    this.name = 'test'
    this.songs = ['You Belong With me']
    this.sayName = function () {
        console.log(this.name)
    }
}

function Child() {
    Person.call(this)
}

module.exports = Child

/**
 * sayName为全局方法，
 * 当构造函数中包含多个方法时，
 * 使用这种方式将造成严重的全局污染
 */
// function Person() {
//     this.name = 'test'
//     this.songs = ['You Belong With me']
//     this.sayName = sayName
// }
// function sayName() {
//     console.log(this.name)
// }