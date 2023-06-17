const add_to = (func) => {
  // arguments which are waiting to be used for the function func

  const argumentsList = []

  const functionsResults = []

  const insert = (arg) => {
    argumentsList.push(arg)
  }

  const result = () => {
    if (argumentsList.length == 2) {
      functionsResults.push(func(argumentsList[0], argumentsList[1]))
      argumentsList.pop()
      argumentsList.pop()

      if (functionsResults.length == 1) return functionsResults[0]
      return functionsResults.reduce((total, el) => {
        return func(total, el)
      })
    }
  }

  return { insert, result }
}
