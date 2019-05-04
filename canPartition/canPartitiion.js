function canPartition(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      console.log(nums[j], sum);
      sum += nums[j];
      console.log(sum);
    }
  }
}

console.log(canPartition(1, 5, 11, 15));
