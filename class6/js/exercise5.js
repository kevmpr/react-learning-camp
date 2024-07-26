const nums = [54, 20, 310, 2, 98, 27, 8];
nums.sort((a, b) => a - b);
console.log(nums);

const evenNums = nums.filter(value => value % 2 === 0);
console.log(evenNums)