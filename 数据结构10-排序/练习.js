// 冒泡排序
var bubbleSort = function (nums) {
    for (let i = nums.length - 1; i > 0; i--) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp
            }
        }
    }
    return nums
}

var selectSort = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let min = i
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[min]) {
                min = j
            }
        }
        let temp = nums[i]
        nums[i] = nums[min]
        nums[min] = temp
    }
    return nums
}

var insertSort = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        let j = i
        let temp = nums[i]
        while (temp < nums[j - 1] && j > 0) {
            nums[j] = nums[j - 1]
            j--
        }
        nums[j] = temp
    }
    return nums
}

var quickSort = function (nums) {
    if(nums.length <= 1) return nums
    let mid = Math.floor(nums.length / 2)
    let pivot = nums.splice(mid, 1)[0]
    let left = []
    let right = []
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] >= pivot){
            right.push(nums[i])
        }else{
            left.push(nums[i])
        }
    }
    return quickSort(left).concat(pivot, quickSort(right))
}

let nums = [2, 4, 1, 3, 9, 10, 2, 21, 53, 76, 13]
// console.log(quickSort(nums))

// let arr = [1,4,2,6,8,9]
// let brr = [2,4,1,3,5,6,9]
// let crr = arr.filter(item => brr.includes(item))
// let set1 = new Set(arr)
// let set2 = new Set(brr)
// let res = []
// for(let val of set1){
//     if(set2.has(val)){
//         res.push(val)
//     }
// }
// console.log(res)


// function rest(...args){
//     console.log(...args)
// }

// rest(1,2,4,1,12,8)

let arr = ["flower","flow","flight"]
console.log(arr.sort())