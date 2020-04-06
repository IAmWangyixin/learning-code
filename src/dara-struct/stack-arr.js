/**
 * 堆栈顺序实现
 */
// 关联信息声明为对象进行管理
let stack = {
    data: [],
    top: -1
}

//入栈
function stackArrPush(stack, val) {
    stack[++top] = val

    console.log(stack)
    console.log(top)
    return stack
}

//出栈
function stackArrPop(stack) {
    if(top < 0) {
        console.log('栈已空，没有元素可pop')
        return undefined
    }
    console.log(stack[top])
    return stack[top--]
}

stackArrPush(stack, 'A')
stackArrPush(stack, 'B')
stackArrPop(stack)
stackArrPush(stack, 'C')

stackArrPop(stack)
stackArrPop(stack)
stackArrPop(stack)