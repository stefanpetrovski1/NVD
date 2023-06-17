const wait = (func) => {
  let argumentsWaiting = []

  const add = (argToAdd) => {
    argumentsWaiting.push(argToAdd)
  }

  const remove = (argToRemove) => {
    let idx = argumentsWaiting.indexOf(argToRemove)

    argumentsWaiting = argumentsWaiting.filter((el, i) => {
      return i != idx
    })
  }

  const calc = () => {
    return func(argumentsWaiting)
  }

  return { add, remove, calc }
}
