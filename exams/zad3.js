// Да се напише функција add_to_agg која прима друга функција f како параметар
// и која чува вредности од моменталното извршување на функцијата f.

// Функцијата add_to_agg овозможува да се додавааат нови аргументите кои треба да бидат
// пресметани од функцијата f. Функцијата f секогаш прима 2 параметри: моменталната вредност
// и вредноста што се додава. Доколку нема внесено (преку функцијата `insert) 2 параметри, тогаш не се врши пресметка.

// Функцијата add_to_agg треба да врати објект кој има 2 методи:

// insert - кој додава нов аргумент кој треба да се пресмета
// result - кој го трга аргументот кој треба да се пресмета од финалната пресметка

const add_to = (func) => {
  // arguments which are waiting to be used for the function func
  // passed as parameter
  const argumentsList = []

  const functionsResults = []

  const insert = (arg) => {
    argumentsList.push(arg)
  }

  const result = () => {
    if (argumentsList.length == 2) {
      let result = null
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
