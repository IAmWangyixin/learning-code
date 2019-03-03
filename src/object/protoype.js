/**
 * 原型式继承
 * @param {Object} o 
 */
function Parent() {
    this.eye = 'brown'
}

// Parent.prototype.eye = 'brown'

function Child() {
}

Child.prototype = new Parent()

module.exports = Child

// function createObj(o) {
//     function F() {}
//     F.prototype = o;
//     return new F();
// }