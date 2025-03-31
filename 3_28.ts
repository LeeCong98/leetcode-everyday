// 两分查询

const binrySearch = (nums: number[], target: number): number => {
    if (!Array.isArray(nums) || !nums.length) {
        return -1 
    }
    
    if (nums.length === 1) {
        return nums[0] === target
    }

    const len = nums.length

    let left = 0 
    let right  = nums.length - 1



    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (nums[mid] === target) {
            return mid
        } else if (target > nums[mid]) {
            right = mid + 1
        } else {
            left = mid - 1
        }
    }

    return -1
}




// 线性查找

// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

// 从row开始查找，当row=0，分别获取每个row中的大小范围，row0 - columns[columns[0]]，从而获取每个元素的范围

const findNumberIn2DArray =  (nums: number[][], target: number): boolean  => {
    // 先获取范围
    const matrixRowLen = nums.length - 1

    const matrixColLen = nums[0].length - 1

    let rangeIndex = -1
    const firstCol = nums[0]

    for(let i = 0; i < matrixColLen; i++) {
        const start = firstCol[i]
        const end = nums[matrixRowLen][i]
        if (start === target || end === target) {
            return true
        }

        console.log(start, target, end)

        // 
        if (start < target && end > target) {
            rangeIndex = i
        }
        
    }
    console.log(rangeIndex, 'rangeIndex')

    if (rangeIndex === -1) {
        return false
    }


    // 两分查找来找到这个数字
    // 此时Y时固定的，X轴的坐标是变化的,
    let left = 0
    let right = matrixColLen
    
    while(left <= right) {
        const mid = Math.floor((right + left)/2)

        if (nums[mid][rangeIndex] === target) {
            return true 
        } else if (nums[mid][rangeIndex] > target) {
            right = mid - 1
            
        } else {
            left = mid + 1
        }
    }
    return false


}

console.log(findNumberIn2DArray([
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  
], 19))