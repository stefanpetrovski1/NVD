// Напишете функција sort_by_num_calls која прима листа од функции
// и ги сортира (во растечки редослед) врз основа на тоа колку повици се потребни
// за секоја од функциите во листата да врати вредност која не е е функција.

// пример:

// const f1 = () => "hello"; // f1() ➞ "hello"
// const f2 = () => () => "AWD"; // f2()() ➞ "AWD"
// const f3 = () => () => () => "user"; // f3()()() ➞ "user"

// console.log(sort_by_num_calls( [ f2, f3, f1] ) );
// // Prints: [ [Function: f1], [Function: f2], [Function: f3] ]
// // Reasoning: [f2, f3, f1] ➞ [2, 3, 1] ➞ [1, 2, 3] ➞ [f1, f2, f3]

// забелешка:

// - доколку членот на низата не е функција, третирајте го како да има потреба од 0 повици.
// - секоја функција се повикува без аргументиEvery function will be called with empty parameters.
// - секоја функција треба да се повика барем еднаш
// - вредностите што ги враќаат функциите може да бидат броеви, булови променливи, стрингови, итн.

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
