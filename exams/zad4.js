// Да се напише функција wait која прима друга функција f како параметар и овозможува
// да се почекаат аргументите кои треба да бидат пресметани од функцијата f. Функцијата f секогаш прима низа како прв аргумент.

// Функцијата wait треба да врати објект кој има 3 методи:

// add - кој додава нов аргумент кој треба да се пресмета
// remove - кој го трга аргументот кој треба да се пресмета од финалната пресметка
// calc - кој ја извршува функцијата f врз аргументите кои биле дотогаш додадени.

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
