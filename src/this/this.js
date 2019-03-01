/* 默认绑定 */
var flower = 'morning glory'
function test() {
    console.log(this)
}
test()

/* 隐式绑定 */
const obj = {
    name: 'The Object',
    getName: function () {
        return this.name
    }, 
    child: {
        name: 'obj child',
        foo: function() {
            return this.name
        }
    }
}
console.log((obj.getName = (obj.getName))())
// undefined (非严格模式下，严格模式下this为undefined，this.name抛错)

'use strict'
console.log((obj.getName)())
// The Object

console.log(obj.getName === (obj.getName))
//true

console.log(obj.child.foo())
// obj child

/* new绑定 */
function Bar(a) {
    this.a = a
}
Bar.prototype.age = 12

const b = new Bar(2)
console.log(b.age)
// 12
console.log(b.a)
// 2

/**
 * 用func.call 替代函数的其他调用方式
 */
console.log(obj.child.foo.call(obj.child))
// obj child

let objCall = {}
Bar.call(objCall, 5)

console.log(objCall.age)
// undefined
console.log(objCall.a)
// 5

/* new执行了对象关联 */
let objNew = Object.create(Bar.prototype)
Bar.call(objNew, 666)

console.log(objNew.age)
// 12
console.log(objNew.a)
// 666
