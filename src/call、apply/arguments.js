const test = function() {
    console.log('success:', arguments)
}

function fn(...args) {
    test(arguments);
    test.apply(null, arguments)
    console.log('args:', args);
    console.log(arguments)
    console.log(arguments.length)
    console.log(arguments[0])
    const argArr = [].join.call(arguments);
    console.log('argArr:', argArr)
    let x = 0
    for (let i = 0; i < arguments.length; i++) {
        x += arguments[i]
    }
    console.log('x:', x)
}

fn(1, 2, 3)

const FooObj = {
}
FooObj['1,2,3'] = 'just for fun'

console.log(FooObj)
console.log(FooObj['1,2,3'])
