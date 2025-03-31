// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
// 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
// 请找出数组中任意一个重复的数字
// 例如，如果输入长度为 7 的数组 nums = [2, 3, 1, 0, 2, 5, 3]，那么对应的输出是 2 或 3


// 索引法
function findRepeatNumber(nums: number[]): number {
  let temp

  const len = nums.length

  for (let i = 0; i < len; i++) {
    if (nums[i] === i) {
      continue
    }
    if (nums[i][nums[i]] === nums[i]) {
      return nums[i]
    }

    // 值的交换，比如，i=0，num[i]=2，此时需要将2移到2的位置
    temp = nums[i]
    nums[temp] = nums[i]
    nums[i] = temp
  }
  return -1

}
findRepeatNumber([2, 3, 1, 0, 2, 5, 3])
// 哈希法
function findRepoeatNumberByMap (nums: number[]): number {
  const numsMap = new Map()
  
  const len = nums.length

  for(let i = 0; i < len; i++) {
    if (numsMap.has(nums[i])) {
      return nums[i]
    } else {
      numsMap.set(nums[i], nums[i])
    }
  }
  
  return -1
}

findRepoeatNumberByMap([2, 3, 1, 0, 2, 5, 3])