// JS类型转换只有三种情况
// 1.转换为布尔值
// 2.转换为字符串
// 3.转换为数字

/**
 * 1.转换为布尔值
 * 除valueTransformFalseArr列出的值转换为false外，其余转换为true.
 */
const valueTransformFalseArr = [undefined, null, false, NaN, '', 0, -0]

console.log(valueTransformFalseArr.every((x) => !x))

/**
 * 2.转换为字符串 
 */
console.log('Symbol:', String(Symbol('foo')))

function fn() {
    a = 1
}
console.log('fn:', String(fn))

console.log('Boolean:', String(true))

console.log('Arr:', String([1, 2]))

console.log('Obj:', String({a: 1}))

/**
 * 3. 转换为数字
 * 纯数字字符串、空数组、存在一个元素且为数字的数组转换为数字、null -> 0;
 * Symbol抛错
 * 除上述数组外的引用类型、非纯数字字符串转换为NaN。
 */
console.log('pure num-string:', console.log(Number('21')))

console.log('string:', console.log(Number('21aa')))

console.log('empty arr and one number arr:', console.log(Number([])), console.log(Number([0])))

console.log('null:', console.log(Number(null)))

try {
    Number(Symbol())
} catch (error) {
    console.log('Symbol:', error)
}

console.log('arr and Obj:', console.log(Number([1, 2])), console.log(Number({})))

/**
 * 对象转原始类型
 */
let obj = {
    valueOf() {
        return 0
    },
    toString() {
        return '1'
    },
    [Symbol.toPrimitive]() {
        return 2
    }
}

console.log(1 + obj)