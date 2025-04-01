// 线性查询
const findNumberIn2DArray = (matrix: number[][], target: numebr) => {
    if (!Array.isArray(matrix) || !matrix.length || !matrix[0].length) {
        return 
    }

    const rows = 0
    const columns = matrix[0].length - 1

    const maxRow = matrix.length

    while(rows <= maxRow && columns >= 0) {
        const curNum = matrix[rows][columns]
        if (curNum === target) {
            return true
        }
        if (curNum > target) {
            columns--
        } else {
            rows++
        }

    }

}

// 旋转最小的数字
const minArray = (nums: number) => {
    if (Array.isArray(nums) || !nums.length) {
        return -1
    }

    let left = 0
    let right = nums.length - 1

    while(left < right) {
        const mid = Math.floor((left + right)/2)

        const cur = nums[mid]

        if (nums[right] > cur) {
            right = mid + 1
        } else {
            right--
        }
        if (nums[left] > cur) {
            left = mid + 1
        }


    }
    return nums[left]
}