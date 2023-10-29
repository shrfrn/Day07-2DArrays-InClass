// Remember - arr holds a pointer 
// (in this case, to the vertical array)

var nums1 = [1, 2, 3]
var nums2 = [4, 5, 6, 7]
var nums3 = [8, 9]

var arr = [nums1, nums2, nums3]
console.log('arr: ', arr)

// console.log('arr[0]: ', arr[0])
// console.log('arr[0][0]: ', arr[0][0])

// console.log('arr.length: ', arr.length)
// console.log('arr[0].length: ', arr[0].length)
// console.log('arr[0][0].length: ', arr[0][0].length) // undefined

// arr.push([1, 3, 5])
// console.log('arr: ', arr)
// console.log('arr.length: ', arr.length)

// console.log('arr[3]: ', arr[3])
// console.log('arr[3][2]: ', arr[3][2])

// console.log('arr[4]: ', arr[4]) // undefined
// console.log('arr[4][2]: ', arr[4][2]) // error