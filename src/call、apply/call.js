function callTest() {
    const BeforeArgArr = [].slice.call(arguments) 
    const Constructor = [].shift.call(arguments)
    const ArgArr = [].slice.call(arguments)
    console.log(BeforeArgArr, 'Con:', Constructor, 'Arg:', ArgArr)
}

function A(name) {
    this.name = name
}

callTest(A, 'nina')