function sort_by_num_calls(listOfFunctions) {
  function howManyCalls(func) {
    let counter = 1
    let result = func()
    while (true) {
      if (typeof result !== 'function') {
        break
      }
      counter++
      result = result()
    }
    return counter
  }

  const functionsWithCallNumber = listOfFunctions.map((func) => {
    return {
      func,
      calls: howManyCalls(func),
    }
  })
  functionsWithCallNumber.sort((f1, f2) => f1.calls - f2.calls)

  return functionsWithCallNumber.map((f) => f.func)
}

// const f1 = () => 'hello'
// // f1() ➞ "hello"

// const f2 = () => () => 'AWD'
// // f2()() ➞ "AWD"

// const f3 = () => () => () => 'user'
// // f3()()() ➞ "user"

// console.log(sort_by_num_calls([f2, f3, f1]))
// // [f2, f3, f1] ➞ [2, 3, 1] ➞ [1, 2, 3] ➞ [f1, f2, f3]
