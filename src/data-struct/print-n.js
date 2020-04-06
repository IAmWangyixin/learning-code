// 顺序打印1到N整数
function printNWithFor(N) {
    for (let i = 1; i <= N; i++) {
        console.log(i);
    }
}

function printNWithRecursive(N) {
    if (N) {
        printNWithRecursive(N - 1);
        console.log(N);
    }
}

// printNWithFor(100);
// printNWithFor(1000);
// printNWithFor(10000);
// printNWithFor(100000);


// printNWithRecursive(100);
// printNWithRecursive(1000);
printNWithRecursive(10000);
// printNWithRecursive(100000);