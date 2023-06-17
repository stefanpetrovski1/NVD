function flatten(arr) {
  return arr.reduce((total, curVal) => {
    if (!Array.isArray(curVal)) {
      return total.concat(curVal)
    } else {
      return total.concat(flatten(curVal))
    }
  }, [])
}
// console.log(flatten([1, [2], [3, [[4]]], [5, 6]]))
// console.log(flatten([10, [50, [100, [150, 200]]]]))
// console.log(flatten([9, [8, 7, [[6]]], 5, [4]]))
// console.log(flatten([[15, [20, [25]], 30, [[[35]]], 40]]))
// console.log(flatten([1, [2, [[3]], [4, 5, [6]]], [[[7, 8, [9]]]]]))
