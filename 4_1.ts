function searchMinNum(nums: number[]) {
    if (!Array.isArray(nums) || nums.length === 0) {
        return -1;
    }
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[left]) {
            // 从 left 到 mid 是有序的，最小元素在 mid 右侧
            left = mid;
        } else if (nums[mid] < nums[left]) {
            // 最小元素在 left 到 mid 之间
            right = mid;
        } else {
            // 无法确定最小元素位置，左指针右移
            left++;
        }
    }
    // 最终 left 指向最小元素
    return nums[left];
}

// 测试用例
const rotatedArray = [3, 4, 5, 1, 2];
console.log(searchMinNum(rotatedArray));

// 反转链表
class ListNode {
    public val: string;
    public next: ListNode | null;
    constructor(val: string, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

// 遍历node list
const eachNode = (nodeList: ListNode | null) => {
    let current = nodeList;
    while (current) {
        console.log(current.val);
        current = current.next;
    }
};

const reverse  = (nodeList: ListNode) => {
    let prev = null
    let cur = nodeList
    while (cur !== null) {
        const nextTemp = nodeList.next
        cur.next = prev
        prev = cur
        cur = nextTemp

    }

}


const nextHead = new ListNode('1', new ListNode('2', new ListNode('3', null)));

eachNode(nextHead);
