function difference(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))]
}

// console.log(difference([1, 2, 3], [100, 2, 1, 10]))
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]))
// console.log(difference([1, [4, [6]]], [[100], [2, 1], 10]))
// console.log(difference([7, [8, [9]]], [[9], 8, [10, 1]]))
