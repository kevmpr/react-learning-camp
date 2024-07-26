const nums = [54, 20, 310, 2, 98, 27, 8];
nums.sort((a, b) => a - b);
console.log(nums);

const newNums = nums.map(num => num * 2);
console.log(newNums);