const obj = {
    name: 'The Object',
    getName: function () {
        return this.name
    }
}
console.log((obj.getName = (obj.getName))())
// undefined (非严格模式下，严格模式下this为undefined，this.name抛错)

'use strict'
console.log((obj.getName)())
// The Object

console.log(obj.getName === (obj.getName))
//true
