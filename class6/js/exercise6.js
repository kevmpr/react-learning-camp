const nums = [54, 20, 310, 2, 98, 27, 8, 1];
nums.sort((a, b) => a - b);
console.log(nums);

const totalNums = nums.reduce(addArray, 0)

function addArray(total, num){
    return total + num
}

console.log(totalNums);


