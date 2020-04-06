/**
 * 连续子列最大和,以及子列序号
 */
function maxSubSeqSum(arr) {
    let start = 0;
    let end = 0;
    let maxSum = 0;
    let thisSum = 0;

    arr.forEach((element, i) => {
        thisSum += element;
        if (thisSum > maxSum) {
            maxSum = thisSum;
            end = i;
        }
        if (thisSum < 0) {
            thisSum = 0;
            start = i + 1;
        }
    });

    console.log('MaxSum:', maxSum, 'Start:', start, 'End:', end);
}

maxSubSeqSum([2, 1, -2, -5, 3, 6, 5, 7]);