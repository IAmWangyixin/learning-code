const test = function() {
    console.log('success:', arguments)
}

function fn(...args) {
    test(arguments);
    test.apply(null, arguments)

    const ArgsArrFormES6 = Array.from(arguments)
    console.log('ArgsArrFormES6:', ArgsArrFormES6);
    console.log('args:', args);
    console.log('arguments:', arguments)
    console.log('arguments.length:', arguments.length)
    console.log('index element:', arguments[0])
    console.log('typeof arguments:', typeof arguments)
    console.log('arguments type:', Object.prototype.toString.call(arguments))

    // const argArr = [].join.call(arguments)
    // const argArr = Array.prototype.slice.call(arguments)
    const argArr = [].slice.call(arguments)

    argArr.push(4)
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

let sumNum = (...a) => {
    console.log('rest:', a)
    return a[0] + a[1];
}

let foo = function(a, b) {
    console.log('arguments:', arguments)
    return a + b;
}

sumNum(1, 2)

foo(3, 4)

// console.log('arguments out:', arguments)