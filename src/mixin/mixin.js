/**
 * 混入：将一个模块混入到另一个模块或类。
 * @param {Function} fun 
 * @param {Object} mix 
 */
function mixin(fun, obj) {
    let newFun = fun
    newFun.prototype = Object.create(fun.prototype)

    for(let prop in obj) {
        if(obj.hasOwnProperty(prop)) {
            newFun.prototype[prop] = obj[prop]
        }
    }

    return newFun
}

const BigMixin = {
    fly: function() {
        console.log('I can fly')
    }
}

const Big = function() {
    console.log('it\'s Big fun')
}

const BigFly = mixin(Big, BigMixin);

const bigFlyInstance = new BigFly();// it's big fun

bigFlyInstance.fly();
